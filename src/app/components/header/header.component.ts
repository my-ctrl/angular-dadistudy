import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title1: any;
  @Input() msg: any;
  @Input() run: any;
  @Input() home: any;

  constructor() { }

  ngOnInit(): void {
  }
  getParentMsg() {
    // 获取父组件的数据
    alert(this.msg)
  }
  getParentRun() {
  //  this.run();
    alert(this.home.msg);
    alert(this.home.run());
  }
}
