import { ServerRequest } from 'https://deno.land/std@0.79.0/http/server.ts';
import getModels from './_lib/gntm-models.ts';

export default async (req: ServerRequest) => {
	const models = await getModels();

	req.respond({ body: JSON.stringify(models) });
};
