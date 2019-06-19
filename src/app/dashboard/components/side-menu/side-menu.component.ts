import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public route: string;
 constructor(private rte: Router) { }

  ngOnInit() {
    this.route = this.rte.url;
    console.log(109, this.route);
  }

}
