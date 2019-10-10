import {
  Component,
  OnInit,
  Input,        // <-- added,
  HostBinding
} from '@angular/core';
import { Article } from './article.model'; // <-- added
import { FlagArticleServiceService } from '../flagArticleService.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(private service:FlagArticleServiceService ) {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

  flagArticle (article: Article) {
    this.service.setLowestVote(article);

  }

}
