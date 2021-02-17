import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zxdadi01';

  public flag: boolean = true;
  changeTitle() {
    this.title = '改变后的title';
  }
  changeFlag() {
    this.flag=!this.flag
  }
}
