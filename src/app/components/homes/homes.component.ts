import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../services/request.service'

import {map,filter} from 'rxjs/operators'

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {
  public a1:string='abc'
  constructor(public request:RequestService) { }

  ngOnInit(): void {
    // 1.同步方法 这样就能调用服务里面实例里的方法
    let data = this.request.getData();
    console.log(data);
    
    // 2.callback获取异步数据
    let callbackdata1 = this.request.getCallbackData((data1:any) => {
      console.log(data1);
    });
    

    // 3.promise获取异步数据
    //   通过.then拿到异步数据
    var promiseData = this.request.getPromiseData();
    promiseData.then((data) => {
      console.log(data);
      
    })

    // //4. rxjs获取异步方法里面的数据
    // // 可以看出这个和promise非常相似，但是比它功能更加强大一些
    // var rxjsData=this.request.getRxjsData()
    // // 通过subscribe，也叫订阅，来获取数据
    // rxjsData.subscribe((data) => {
    //   console.log(data);
      
    // })


    //5. 过1秒以后撤回刚才的操作
      //  撤回的给steem，因为rxjs是异步数据流的编程
    var streem = this.request.getRxjsData();
    var d=streem.subscribe((data) => {
      console.log(data);
      
    })
    // 取消需要 steem.subscribe返回的值来取消
    setTimeout(() => {
      d.unsubscribe(); //取消订阅
    },1000)

  // 6.promise执行多次 (没有这个能力)
  var IntervalData = this.request.getPromiseIntervalData();
  IntervalData.then((data) => {
    console.log(data);
    
  })

  // 7.RXJS执行多次
  // var streemInterval = this.request.getRxjsIntervalData();
  // streemInterval.subscribe((data) => {
  //   console.log(data);
  // })

    
    // 8.用工具方法对返回的数据进行处理  返回2,4,6,8...
  //   var streemNum = this.request.getRxjsIntervalNum();
    // streemNum.pipe(
    //   // filter((value:any) => {
    //   //   if (value % 2 == 0) {
    //   //     return true;
    //   //   }
    //   // })

    //   map((value:any) => {
    //     if (value % 2 == 0) {
    //       return true;
    //     }
    //   })

    // )
  //   .subscribe((data) => {
  //   console.log(data);
  // })




  }

}
