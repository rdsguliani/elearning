import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  navItems = [];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navItems = this.getConfig();
  }

  navItemClicked(event, item) {
    event.preventDefault();

    const url = item.redirect;
    this.navigationService.navigate(`/topic/${url}`);

  }

  getConfig() {
    return [
      {
        title: "Write an article",
        redirect: "write_an_article",
        id: '2',
      },
      {
        title: "My first article",
        redirect: "my_first_article",
        id: '3',
      },

      {
        title: "Write an article 1",
        redirect: "my_first_article1",
        id: '21',
      },
      {
        title: "My first article1",
        redirect: "my_first_article31",
        id: '31',
      },

      {
        title: "Write an article2",
        redirect: "my_first_article22",
        id: '22',
      },
      {
        title: "My first article2",
        redirect: "my_first_article32",
        id: '32',
      },

      {
        title: "Write an article3",
        redirect: "my_first_article23",
        id: '23',
      },
      {
        title: "My first article3",
        redirect: "my_first_article33",
        id: '33',
      },
    ]
  }

}
