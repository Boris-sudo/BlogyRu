import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found1',
  templateUrl: './page-not-found1.component.html',
  styleUrls: ['./page-not-found1.component.css']
})
export class PageNotFound1Component implements OnInit {

  constructor(
    public router:Router,
  ) { }

  ngOnInit(): void {
  }

}
