import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeTab(option) {
    switch (option) {
      case "ADD_PRODUCT": this.router.navigate(['/add'])
        break;
      case "ADD_ITEMS": this.router.navigate(['/inventory'])
        break;
      case "ORDER": this.router.navigate(['/track'])
        break;
      case "ACTIVE_ORDER": this.router.navigate(['/request'])
        break;
      case "SHOW_MAP": this.router.navigate(['/map'])
        break;
      case "DASHBOARD": this.router.navigate([''])
        break;
    }
  }

}
