import { json, type RequestHandler } from '@sveltejs/kit';
import { PUBLIC_CLUBIFY_API_BASE } from '$env/static/public';

export const POST: RequestHandler = async ({ request }) => {
	try {
		// Get the form data from the request
		const formData = await request.formData();

		// Forward the request to the external API
		const response = await fetch(`${PUBLIC_CLUBIFY_API_BASE}/process-image/`, {
			method: 'POST',
			headers: {
				accept: 'image/webp'
			},
			body: formData
		});

		if (!response.ok) {
			throw new Error('Failed to process image');
		}

		// Get the processed image as blob
		const blob = await response.blob();

		// Return the blob with appropriate headers
		return new Response(blob, {
			status: 200,
			headers: {
				'Content-Type': 'image/webp',
				'Cache-Control': 'no-cache'
			}
		});
	} catch (error) {
		console.error('Error processing image:', error);
		return json({ error: 'Failed to process image' }, { status: 500 });
	}
};
