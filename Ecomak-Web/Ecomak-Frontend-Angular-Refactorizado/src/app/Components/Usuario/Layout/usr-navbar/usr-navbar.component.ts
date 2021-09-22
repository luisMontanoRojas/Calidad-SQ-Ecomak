import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-usr-navbar',
  templateUrl: './usr-navbar.component.html',
  styleUrls: ['./usr-navbar.component.css']
})
export class UsrNavbarComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    $('#Logo').show();
    $('#Marca').hide();
    $(window).scroll(function(){
      $('nav').toggleClass('scrolled',$(this).scrollTop()>150);
    });
    $(window).scroll(function() {
      if ($("#usrNav").offset().top < 150) {
          $('#Logo').show(300);
          $('#Marca').hide(300);

      } else {
          $('#Logo').hide(300);
          $('#Marca').show(300);

      }
    });
  }
  


}
