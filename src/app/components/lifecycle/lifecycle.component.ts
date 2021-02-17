// 接口可写可不写，所以去掉了
// 先是触发完 然后绑定完数据再触发几个  357
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent  {

  @Input() title: any;

  public msg: string = '我是一个生命周期演示'

  public userinfo: string = '';
  public oldUserinfo: string = '';
  public name: string = '123';
  public oldName: string = '456';
  public counts: number = 1;
  // 构造方法会触发
  constructor() {
    console.log('00 constructor 除了使用简单是值对局部变量进行初始化之外，什么都不应该做');
  }
  // 有父子组件传值会触发 没有就不触发
  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('01 ngOnChanges 有父子组件传值会触发 没有就不触发');
    
  }
  ngOnInit(): void {
    console.log('02 ngOnInit  请求数据一般放在这个里面');
    
  }
  ngDoCheck() {
    console.log('03 ngDoCheck ');
    if (this.userinfo !== this.oldUserinfo) {
      console.log('03.1 你从$(this.oldUserinfo)改成$(this.userinfo)');
      this.oldUserinfo = this.userinfo;
    } else {
      // this.counts = this.counts + 1;
      console.log('03.2 数据没有变化');
      
    }
  }

  ngAfterContentInit() {
    console.log('04 ngAfterContentInit  ');
  }

  ngAfterContentChecked() {
    console.log('05 ngAfterContentChecked'); 
  }

  ngAfterViewInit() {
    console.log('06 ngAfterViewInit');
    
  }

  ngAfterViewChecked() {
    console.log('07 ngAfterViewChecked');
    
  }
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  console.log('08 ngOnDestory');
}
  

// 自定义方法
  changeMsg() {
    this.msg='数据改变了'
  }
}
