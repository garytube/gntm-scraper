import { ServerRequest } from 'https://deno.land/std@0.79.0/http/server.ts';
import getModels from 'https://raw.githubusercontent.com/garytube/gntm-scraper/main/api/_lib/gntm-models.ts';

export default async (req: ServerRequest) => {
	const models = await getModels();

	req.respond({ body: JSON.stringify(models) });
};
