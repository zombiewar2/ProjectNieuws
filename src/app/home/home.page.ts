import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NieuwsArtiekelsService } from '../api/nieuws-artiekels.service';
import { MenuController } from '@ionic/angular';

interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
  name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
  
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedCategorie = '';
  topHeadlines: Article[] = [];

  constructor(private articleService: NieuwsArtiekelsService, private router: Router,private menuController: MenuController) {
    articleService.getTopHeadlines().subscribe(
      (results) => {
        console.log(results);
        this.topHeadlines = results.articles;
        
      },
      (error) => {
        console.error('Error fetching top headlines:', error);
      }
    );

    articleService.getArticlesByCategorie(this.selectedCategorie).subscribe((results) => {
      console.log(results);
    });
  }

  getDetails(selectedArticle: Article) {
    console.log(selectedArticle);
    const params: NavigationExtras = {
      queryParams: {
        'author': selectedArticle.author,
        'content': selectedArticle.content,
        'description': selectedArticle.description,
        'publishedAt': selectedArticle.publishedAt,
        'source': selectedArticle.source.name,
        'title': selectedArticle.title,
        'url': selectedArticle.url,
        'urlToImage': selectedArticle.urlToImage,
      }
    }
    this.router.navigate(['/niewsdetails'],params);
  }
  
  navigateToLogin(){
    this.router.navigate(['/login'])
  }
  navigateToFavo(){
    this.router.navigate(['/geliked'])
  }
}