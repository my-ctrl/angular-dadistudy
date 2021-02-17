import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public msg='我是子组件的一个msg'
  constructor() { }

  ngOnInit(): void {
  }

  run() {
    alert('我是子组件的run方法')
  }

}
