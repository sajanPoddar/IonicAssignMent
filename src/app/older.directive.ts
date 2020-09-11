import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appOlder]'
})
export class OlderDirective implements OnInit {
  
  @Input('appOlder') birth_date: any;

  constructor(private el: ElementRef) { 
    
  }
  
  ngOnInit() {
    let date = new Date(this.birth_date);
    let currentDate = new Date();

    let year = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24/365);
    if(year > 50) {
      this.el.nativeElement.textContent += '(older)';
      this.el.nativeElement.style.color = "red";
    }
       
  }
  

}
