import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {

  @Output() private outer = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendParent() {
    // alert('111');
    // 这就是广播
    this.outer.emit('我是子组件的数据')
  }
}
