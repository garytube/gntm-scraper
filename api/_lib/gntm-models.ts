import { DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts';
import { Candidates, List } from './gntm-models.d.ts';
const source = 'https://www.prosieben.de/tv/germanys-next-topmodel/models';

async function getModels() {
	const res = await fetch(source);

	const html = await res.text();
	const gntm = new DOMParser().parseFromString(html, 'text/html');

	if (!gntm) {
		throw new Error('no html code found');
	}

	const data = await JSON.parse(gntm.querySelector('script#state')!.innerHTML);
	const models = (await data.views.default.content.areas[0].containers[1].elements[0].groups[0]
		.items) as Candidates[];

	const list: List[] = [];

	models.forEach((m) => {
		list.push({
			name: m.candidate.firstName,
			picture: m.picture.url + '/profile:mag-280x373'
		});
	});

	return list;
}

export default getModels;
