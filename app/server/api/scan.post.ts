import {serverSupabaseClient} from "#supabase/server";
import {SupabaseClient} from "@supabase/supabase-js";

async function createScan(originalUrl: string, client: SupabaseClient) {
	let websiteId = null
	let scanId = null
	let dberror = null
	const host = new URL(originalUrl).host

	// Find website in database
	const {data: existingEntry} = await client.from('websites').select('id').eq('host', host).single()
	websiteId = existingEntry?.id || null

	// Create website in database
	if (!websiteId) {
		const {data: newEntry, error} = await client.from('websites').insert({host}).select('id').single()
		if (error) {
			dberror = error
		}
		websiteId = newEntry?.id || null
	}

	// Add scan to database
	const { data: scanEntry, error} = await client
		.from('scans')
		.insert({websites_id: websiteId, status: 'QUEUED', original_url: originalUrl})
		.select('id')
		.single()

	if (error) {
		dberror = error
	}
	scanId = scanEntry?.id || null

	return {scanId, websiteId, error: dberror}
}

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)
	const body = await readBody(event)

	// Parse website URL
	try {
		if (!body.website || !new URL(body.website)) {
			return {
				success: false
			}
		}
	} catch (e) {
		console.warn('Invalid URL:', (e as Error).message)
		return {
			success: false
		}
	}

	const {scanId, error} = await createScan(body.website, client)
	if (error) {
		console.error(error)
		return {
			success: false
		}
	}

	return {
		success: true,
		data: {
			id: scanId
		}
	}
})
