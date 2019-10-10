import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagArticleServiceService {

constructor() { }

setLowestVote (article: Article) {
  article.votes = 0;
  console.log("setLowestVote")

}

}
