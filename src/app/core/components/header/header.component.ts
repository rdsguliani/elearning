import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems=null;

  constructor() { 
    console.log("[INIT HEADER]")
  }

  ngOnInit() {
    this.navItems = this.getConfig()
  }

  getConfig() {
    return [
      {
        title: "Home",
        route: "/topic/home",
        children: []
      },
      {
        title: "Link",
        route: "/topic/link",
        children: []
      },
      {
        title: "Drop down",
        children: [
          {
            title: "Action",
            route: "/topic/action",
          },
          {
            title: "Another Action",
            route: "/topic/action2",
          },
          {
            title: "Link2",
            route: "/topic/link2",
          }
        ]
      }
    ]
  }

}
