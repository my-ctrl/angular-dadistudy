import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news2',
  templateUrl: './news2.component.html',
  styleUrls: ['./news2.component.css']
})
export class News2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// 子组件触发父组件的run方法
  run2(e:any) {
    console.log(e);
    
    alert('我是父组件的run方法')
  }

}
