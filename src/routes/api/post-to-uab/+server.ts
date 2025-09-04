import { json, type RequestHandler } from '@sveltejs/kit';
import { PUBLIC_CLUBIFY_API_BASE } from '$env/static/public';

export const POST: RequestHandler = async ({ request }) => {
	try {
		// Get the JSON data from the request
		const body = await request.json();

		// Forward the request to the external API
		const response = await fetch(`${PUBLIC_CLUBIFY_API_BASE}/post-to-uab`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		if (!response.ok) {
			throw new Error('Failed to post to Facebook');
		}

		// Get the response data
		const responseData = await response.json();

		// Return the response data
		return json(responseData);
	} catch (error) {
		console.error('Error posting to Facebook:', error);
		return json({ error: 'Failed to post to Facebook' }, { status: 500 });
	}
};
