import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-newsdata',
  templateUrl: './newsdata.component.html',
  styleUrls: ['./newsdata.component.css']
})
export class NewsdataComponent implements OnInit {

  public list: any[] = [];

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

  getData() {
    // alert('执行get请求');
    let api = 'http://a.itying.com/api/productlist';
    // angular底层封装http请求用的RXJX，所以用subscribe subscribe里面参数可以随便写
    this.http.get(api).subscribe((response:any) => {
      console.log(response);
      this.list = response.result;
    })
  }


  // doLogin() {
    
  //   let api = '';
  //   this.http.post(api).subscribe((response) => {
  //     console.log(response);
      
  //   })

  // }




}
