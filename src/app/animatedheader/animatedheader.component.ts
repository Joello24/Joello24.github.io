import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-animatedheader',
  templateUrl: './animatedheader.component.html',
  styleUrls: ['./animatedheader.component.css']
})
export class AnimatedheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    function elementScrolled(elem)
    {
    console.log("We check");
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
      
    if (elementScrolled('.skillWheel')) {
        console.log("We scrolled");

    
    $(document).ready(function(){
  
      var $randomnbr = $('.nbr');
      var $timer= 9;
      var $it;
      var $data = 0;
      var index;
      var change;
      var letters = ["m", "y", " ", "s", "k", "i", "l", "l","-","s","e","t"];
      
      $randomnbr.each(function(){
          
        change = Math.round(Math.random()*100);
        $(this).attr('data-change', change);
        
      });
      
      function random(){
        return Math.round(Math.random()*9);
      };
      
      function select(){
        return Math.round(Math.random()*$randomnbr.length+1);
      };
      
      function value(){
        $('.nbr:nth-child('+select()+')').html(''+random()+'');
        $('.nbr:nth-child('+select()+')').attr('data-number', $data);
        $data++;
        
        $randomnbr.each(function(){
            if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
              index = $('.ltr').index(this);
              $(this).html(letters[index]);
              $(this).removeClass('nbr');
            }
        });
        
      };
      
      $it = setInterval(value, $timer);
        
    });
  }
}
  }

