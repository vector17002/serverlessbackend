export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response("This is a test serverless application")
	},
} satisfies ExportedHandler<Env>;
