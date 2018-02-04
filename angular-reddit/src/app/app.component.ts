import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	articles: Article[];

	constructor(){
		this.articles = [
			new Article('Angular 2', 'http://angular.io', 3),
			new Article('Fullstack', 'http://fullstack.io', 2),
			new Article('Angular Homepage', 'http://angular.io', 1),
		];
	}

  // We take 2 Input Elements, log the input to the browser's developer console, and add them to our collection of articles
  // We then reset the bound properties for the next input sequence
  // finally we return false to prevent the browser from reloading the window, which would reset our article collection
	addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
	  console.log(`Adding article title: ${title.value} and link: ${link.value}`);
	  this.articles.push(new Article(title.value, link.value, 0));
	  title.value = '';
	  link.value = '';
	  return false;
	}

  // Dynamically sort the article collection by the number of votes each one has.
  // This method does not favor secondary alphabetical sorting if 2 items votes are equal
	sortedArticles(): Article[]{
		return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
	}
}
