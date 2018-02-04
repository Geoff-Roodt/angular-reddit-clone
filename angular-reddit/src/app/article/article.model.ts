// Declares our Article model with appropriate variables and methods

export class Article{
	title:string;
	link:string;
	votes:number;

	constructor(title:string, link:string, votes?:number){
		this.title = title;
		this.link = link;
		this.votes = votes || 0;
	}

	voteUp() : void{
		this.votes += 1;
	}

	voteDown(): void{
		this.votes -= 1;
	}

	// This will strip the domain name from the given path (i.e. https://www.google.com will become google.com)
	domain(): string{
		try{
			const domainAndPath: string = this.link.split('//')[1];
			return domainAndPath.split('/')[0];
		}catch(err){
			return null;
		}
	}
}
