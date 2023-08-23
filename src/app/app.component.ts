import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';
  constructor(private router: Router) {}
  navigateToLog() {
    console.log("Hello");
    this.router.navigate(['/login']);
  }
  
}


