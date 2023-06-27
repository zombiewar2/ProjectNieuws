import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-geliked',
  templateUrl: './geliked.page.html',
  styleUrls: ['./geliked.page.scss'],
})
export class GelikedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToLogin(){
    this.router.navigate(['/login'])
  }
}
