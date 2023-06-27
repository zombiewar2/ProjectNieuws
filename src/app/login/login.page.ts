import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToRegistreer() {
    this.router.navigate(['/register']);
  }
  
 
}
