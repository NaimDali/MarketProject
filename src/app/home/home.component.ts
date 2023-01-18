import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  setAdmin() {
    this.isAdmin = true;
    sessionStorage.setItem('admin', 'true');
  }
  setUser() {
    this.isAdmin = false;
    sessionStorage.setItem('admin', 'false');
  }
}
