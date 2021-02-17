import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent   {

 

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
     let nav = document.querySelector(".nav");
    var lis = nav.children;
    for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener('mouseenter', function () {
          this.children[1].style.display = "block";
          console.log(1);
      })
      lis[i].addEventListener('mouseleave', function () {
          this.children[1].style.display = "none";
          console.log(1);
      })
      // lis[i]
  //   lis[i].onmouseover = function () {
  //     this.children[1].style.display = "block";
  //     console.log(1);
  //   };
  //   lis[i].onmouseout = function () {
  //     this.children[1].style.display = "none";
  //   };
  }
  }
  
}
