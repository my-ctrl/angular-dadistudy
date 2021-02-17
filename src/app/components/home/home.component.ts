import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string = '我是首页组件的标题';
  public msg: string = '哈哈';

 
  constructor() { }

  ngOnInit(): void {
  }

  run() {
    alert('我是父组件的run方法')
  }

}
