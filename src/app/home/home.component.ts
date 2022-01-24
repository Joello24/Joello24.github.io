import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserTestingModule } from '@angular/platform-browser/testing';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDarkTheme = true;
  windowHeight: any;
  constructor() { 
}

ngOnInit(): void {
     const text = <HTMLDivElement>document.getElementById("popupTextID");
     const toggleTextButton = document.getElementById("noticeButton");
     toggleTextButton?.addEventListener("click", message);
     const projectPopupBox = <HTMLDivElement>document.getElementById("popupProjectID");
     projectPopupBox.hidden = true;
     const toggleProjectViewButton = document.getElementById("projectButton");
     toggleProjectViewButton?.addEventListener("click", projectPopup);

     const projectPopupBox2 = <HTMLDivElement>document.getElementById("popupProjectID2");
     projectPopupBox2.hidden = true;
     const toggleProjectViewButton2 = document.getElementById("projectButton2");
     toggleProjectViewButton2?.addEventListener("click", projectPopup2);

     const projectPopupBox3 = <HTMLDivElement>document.getElementById("popupProjectID3");
     projectPopupBox3.hidden = true;
     const toggleProjectViewButton3 = document.getElementById("projectButton3");
     toggleProjectViewButton3?.addEventListener("click", projectPopup3);

     const projectPopupBox4 = <HTMLDivElement>document.getElementById("popupProjectID4");
     projectPopupBox4.hidden = true;
     const toggleProjectViewButton4 = document.getElementById("projectButton4");
     toggleProjectViewButton4?.addEventListener("click", projectPopup4);
    // const button = document.getElementById("btn");
    // button?.addEventListener("click", this.listenerFunction);

    // const button2 = document.getElementById("btn2");
    // button2?.addEventListener("click", this.listenerFunctionButton);
    let pageHeight = document.body.clientHeight;
    let windowHeight;
    let currentHeight;
    windowHeight = window.innerHeight;
    currentHeight = window.innerHeight;
    const upButton = document.getElementById("btn2");
    upButton?.addEventListener("click", function(){
      window.scrollTo({top:0, behavior:'smooth'})
      currentHeight=0;
    });

    const downButton = document.getElementById("btn");
    downButton?.addEventListener("click", function(){
      window.scrollTo({top:currentHeight, behavior:'smooth'})
      currentHeight += windowHeight;
    });
    
      (function (main) {
        main();
      })(function () {
        "use strict";
      
        var c = <HTMLCanvasElement>document.getElementById("c");
        var ctx = c.getContext("2d");
      
        var WIDTH = (c.width = window.innerWidth);
        var HEIGHT = (c.height = window.innerHeight);
        var mouse = {
          x: 0,
          y: 0,
          isMoved: false
        };
      
        var Particle = function () {
          this.x = 0;
          this.y = 0;
          this.vx = 0;
          this.vy = 0;
          this.r = 50;
          this.g = 255;
          this.b = 255;
          this.a = 0;
          this.life = 0;
          this.radius = Math.random() * 5;
        };
      
        Particle.prototype = {
          constructor: Particle,
          update: function () {
            if (this.life > 0) {
              this.life -= 2;
              if (this.life < 50) {
                this.vx += Math.random() * 4 - 2;
                this.vy += Math.random() * 4 - 2;
                this.vx *= 0.9;
                this.vy *= 0.9;
                this.x += this.vx;
                this.y += this.vy;
                this.a = this.life / 50;
              }
            }
          },
          render: function (ctx) {
            ctx.save();
            ctx.fillStyle =
              "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
            ctx.translate(this.x, this.y);
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          },
          reset: function (tx, ty) {
            this.x = tx;
            this.y = ty;
            this.vx = Math.random() * 4 - 1;
            this.vy = Math.random() * 4 - 1;
            this.life = 150;
            this.a = 1;
            //this.g = Math.round(255 * (this.x / WIDTH));
            //this.b = Math.round(255 * (this.y / HEIGHT));
            this.radius = Math.random() * 5;
          }
        };
      
        var particles = [];
        var particle = null;
        var particleCount = 500;
        var tx = 0;
        var ty = HEIGHT / 2;
        var idx = 0;
        var temp = {
          vx: Math.random() * 4 - 2,
          vy: Math.random() * 4 - 2,
          x: WIDTH / 2,
          y: HEIGHT / 2
        };
      
        for (var i = 0; i < particleCount; i++) {
          particle = new Particle();
          particles.push(particle);
        }
      
        function spawn(target) {
          tx += (target.x - tx) * 0.2;
          ty += (target.y - ty) * 0.2;
      
          particles[idx].reset(tx, ty);
          if (++idx >= particles.length) idx = 0;
        }
      
        c.addEventListener("mousemove", function (e) {
          var rect = c.getBoundingClientRect();
          mouse.x = e.clientX - rect.left;
          mouse.y = e.clientY - rect.top;
          mouse.isMoved = true;
      
          spawn(mouse);
        });
      
        requestAnimationFrame(function loop() {
          requestAnimationFrame(loop);
          ctx.clearRect(0, 0, WIDTH, HEIGHT);
      
          if (!mouse.isMoved) {
            temp.vx += Math.random() * 4 - 2;
            temp.vy += Math.random() * 4 - 2;
            temp.vx *= 0.98;
            temp.vy *= 0.98;
            temp.x += temp.vx;
            temp.y += temp.vy;
            if (temp.x > WIDTH) {
              temp.x = WIDTH;
              temp.vx *= -1;
            }
            if (temp.x < 0) {
              temp.x = 0;
              temp.vx *= -1;
            }
            if (temp.y > HEIGHT) {
              temp.y = HEIGHT;
              temp.vy *= -1;
            }
            if (temp.y < 0) {
              temp.y = 0;
              temp.vy *= -1;
            }
            spawn(temp);
          }
      
          for (var i = 0; i < particleCount; i++) {
            particle = particles[i];
            particle.update();
            particle.render(ctx);
          }
        });
      });
      function projectPopup(){
        if (projectPopupBox.hidden == null) {
          projectPopupBox.hidden = true;
          console.log("setting hidden");
          
        }
        if (projectPopupBox.hidden == true) {
          projectPopupBox.hidden = false;
          console.log("setting viewable");
        }
        else{
          projectPopupBox.hidden = true;
        }
      }
      function projectPopup2(){
        if (projectPopupBox2.hidden == null) {
          projectPopupBox2.hidden = true;
          console.log("setting hidden");
          
        }
        if (projectPopupBox2.hidden == true) {
          projectPopupBox2.hidden = false;
          console.log("setting viewable");
        }
        else{
          projectPopupBox2.hidden = true;
        }
      }
      function projectPopup3(){
        if (projectPopupBox3.hidden == null) {
          projectPopupBox3.hidden = true;
          console.log("setting hidden");
          
        }
        if (projectPopupBox3.hidden == true) {
          projectPopupBox3.hidden = false;
          console.log("setting viewable");
        }
        else{
          projectPopupBox3.hidden = true;
        }
      }
      function projectPopup4(){
        if (projectPopupBox4.hidden == null) {
          projectPopupBox4.hidden = true;
          console.log("setting hidden");
          
        }
        if (projectPopupBox4.hidden == true) {
          projectPopupBox4.hidden = false;
          console.log("setting viewable");
        }
        else{
          projectPopupBox4.hidden = true;
        }
      }
      function message(){
        if (text.hidden == null) {
          text.hidden = true;
          console.log("setting hidden");
          
        }
        if (text.hidden == true) {
          text.hidden = false;
          console.log("setting viewable");
        }
        else{
          text.hidden = true;
        }
      }
    }

  // listenerFunction(this: HTMLElement, ev: Event) {
  //   const height = window.innerHeight;
  //   ev.preventDefault();
  //   console.log("clicked");
  //   window.scrollTo({top:height, behavior:'smooth'})
  // }

  // listenerFunctionButton(this: HTMLElement, ev: Event) {
  //   const height = window.innerHeight;
  //   ev.preventDefault();
  //   console.log("clicked");
  //   window.scrollTo({top:-height, behavior:'smooth'})
  // }

}

