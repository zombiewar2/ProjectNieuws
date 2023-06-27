import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-niewsdetails',
  templateUrl: './niewsdetails.page.html',
  styleUrls: ['./niewsdetails.page.scss'],
})


export class NiewsdetailsPage implements OnInit {
  author: any;
  content: any;
  description: any;
  publishedAt: any;
  source:any;
  title: any;
  url: any;
  image: any;
 
  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.author = this.activatedRoute.snapshot.queryParamMap.get('author')
    this.content = this.activatedRoute.snapshot.queryParamMap.get('content')
    this.description = this.activatedRoute.snapshot.queryParamMap.get('description')
    this.publishedAt = this.activatedRoute.snapshot.queryParamMap.get('publishedAt')
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title')
    this.url = this.activatedRoute.snapshot.queryParamMap.get('url')
    this.image = this.activatedRoute.snapshot.queryParamMap.get('urlToImage')
    this.source = this.activatedRoute.snapshot.queryParamMap.get('source')
  };
  navigateToHome() {
    this.router.navigate(['/home']);
  };
  navigateToLogin(){
    this.router.navigate(['/login'])
  };
  navigateToFavo(){
    this.router.navigate(['/geliked'])
  };

}
