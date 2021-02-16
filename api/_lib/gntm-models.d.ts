export interface Candidates {
	id: string;
	listIndex: null;
	url: string;
	target: Target;
	foldOut: null;
	info: null;
	branding: null;
	body: null;
	config: null;
	headline: string;
	contentType: ContentType;
	channel: Channel;
	site: null;
	picture: Picture;
	pictures: null;
	candidate: Candidate;
	product: null;
	videoType: null;
	orientation: null;
	date: null;
	duration: null;
	flags: null;
	genres: null;
	fsk: null;
	videoId: null;
	valid: Valid;
	epg: Epg;
}

export interface Candidate {
	firstName: string;
	teamName: null;
	headline: string;
	cssId: string;
	contestantType: ContentType;
	status: Status;
	comments: Comments;
	voting: Voting;
	linkedPersons: string[];
}

export interface Comments {
	threadId: null;
}

export enum ContentType {
	Candidate = 'candidate'
}

export enum Status {
	In = 'In'
}

export interface Voting {
	result: Result;
	userVote: null;
}

export interface Result {
	candidateCmsId: null;
	voteCount: null;
	dimensions: null;
	ranking: null;
}

export interface Channel {
	title: ShortName;
	shortName: ShortName;
	cssId: CSSID;
	cmsId: string;
}

export enum CSSID {
	GntmGntm2020Gntm2021 = 'gntm gntm-2020 gntm-2021'
}

export enum ShortName {
	GermanySNextTopmodel = "Germany's Next Topmodel"
}

export interface Epg {
	episode: Episode;
	season: Episode;
	duration: null;
	nextEpgInfo: null;
}

export interface Episode {
	number: null;
}

export interface Picture {
	url: string;
}

export enum Target {
	Self = '_self'
}

export interface Valid {
	from: Date;
	to: null;
}

export interface List {
	name: string;
	picture: string;
}
