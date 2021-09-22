import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

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
    if (window.innerWidth < 990) {
      $('#Marca').show(300);
      $('#Logo').hide(300);
    }
    $(window).scroll(function () {
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
    });
    $(window).scroll(function () {
      if (window.innerWidth < 990) {
        $('#Marca').show(300);
        $('#Logo').hide(300);
      }
      else{
     
        if ($("#usrNav").offset().top < 150) {
          $('#Logo').show(300);
          $('#Marca').hide(300);

        } else {
          $('#Logo').hide(300);
          $('#Marca').show(300);

        }
      }
    });

    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }


}
