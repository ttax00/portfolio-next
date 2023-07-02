import { NextApiRequest } from "next";

export async function POST(request: Request) {
	const form = await request.formData();
	console.log('body', form);

	return new Response(`Your form has been submitted successfully!`, { status: 200 });
}