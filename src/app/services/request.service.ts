import { Injectable } from '@angular/core';

// Observable是rxjs这个第三方模块里面的，rxjs模块已经集成在Angular中了，所以不需要安装
// 所以直接引入这个Observable对象
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步方法
  getData() {
    return 'this is service data';
  }

  getCallbackData(cb) {
    // 异步的 不能在异步函数外面得到值 必须要在异步里面才能得到
    // 自我理解 因为异步的 是先执行外面的再执行异步里面的，所以等到执行异步的，从外面
              //  取不到异步的值了
    setTimeout(() => {
      var username = '张三';
      cb(username)
      // return username;
     
    }, 3000)
    
  }



  // 第二种处理方法 Promise处理异步
  getPromiseData() {
    // reject 可写可不写
    return new Promise((resolve)=>{
     
      setTimeout(() => {
        var username = '张三---promise';
        resolve(username)
       
       
      }, 3000)
    })
  }

  // 
  getRxjsData() {
    return new Observable((observer) => {
      setTimeout(() => {
        var username = '张三---Rxjs';
        observer.next(username)
      // 如果失败的话，通过如下返回
        observer.error('数据')
      }, 3000)
    })
  }

  // 多次执行
  getPromiseIntervalData() {
    // reject 可写可不写
    return new Promise((resolve)=>{
     
      setInterval(() => {
        var username = '张三---promiseInterval';
        resolve(username)

      }, 1000)
    })
  }

  // Rxjs执行多次
  getRxjsIntervalData() {
    let count = 0;
    return new Observable((observer) => {
     
      setInterval(() => {
        count++;
        var username = '张三---Rxjs-Interval'+count;
        observer.next(username)
      // 如果失败的话，通过如下返回
        // observer.error('数据1')
      }, 2000)
    })
  }

  // 
  getRxjsIntervalNum() {
    let count = 0;
    return new Observable((observer) => {
     
      setInterval(() => {
        count++;
        observer.next( count )
      // 如果失败的话，通过如下返回
        // observer.error('数据1')
      }, 2000)
    })
  }








}
