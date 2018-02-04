import { Component, OnInit, HostBinding, Input } from '@angular/core';

// Imports our Article model to give access to the Article properties and methods
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // Dynamically bind the 'Row' styling specifically to our component
	@HostBinding('attr.class') cssClass = 'row';

  // Expect an Article model parameter when the component is printed in HTML
	@Input() article: Article;

	constructor() {
	}

  // Pass the vote on to the Model to handle it at that level; BEST PRACTICE
  // Return false so our browser doesn't reload the page and loose our vote.
	voteUp(): boolean{
		this.article.voteUp();
		return false;
	}

	voteDown(): boolean{
		this.article.voteDown();
		return false;
	}

	ngOnInit() {
	}

}
