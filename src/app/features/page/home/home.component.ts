import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Bank Final';

  menus:Menu[] = [
    {title:'User', img:'assets/img/Users.png', route:'user/list'},
    {title:'Accounts', img:'assets/img/accounts.png', route:'account/list'},
    {title: 'Cards', img: 'assets/img/Card.png' , route: 'card/list'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
