import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  pageTopic;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params)
      this.pageTopic = params.name;
    })
  }

}
