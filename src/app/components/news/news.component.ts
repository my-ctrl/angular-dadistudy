import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 
  // 左边是获取这个值 右边是将获取的值赋值给footer ,这个footer定义为any类型
  @ViewChild('footer') footer:any
  constructor() { }

  ngOnInit(): void {
  }

  getChildMsg() {
    // 获取子组件的数据
    alert(this.footer.msg)
    
  }
  getChildRun() {
   
    this.footer.run()
  }
}
