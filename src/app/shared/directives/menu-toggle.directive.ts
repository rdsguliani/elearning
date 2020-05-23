import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[menu-toggle]'
})
export class MenuToggleDirective {

  constructor(private el: ElementRef) {
    // console.log("Directive initialized");
    // console.log(this.el)
   }

   @HostListener('click', ['$event']) 
   menuItemClicked(event: MouseEvent) {
    //  console.log(event);
     if (this.el.nativeElement.classList.contains('dropdown')) {
       if (this.el.nativeElement.classList.contains('show')) {
        this.removeClass(this.el.nativeElement)
       } else {
        this.addClass(this.el.nativeElement)
       }
     }
   }

   private removeClass(nativeElement: HTMLLIElement) {
    nativeElement.classList.remove('show');
    nativeElement.querySelector('.dropdown-menu').classList.remove('show');
   }

   private addClass (nativeElement: HTMLLIElement) {
    nativeElement.classList.add('show');
    nativeElement.querySelector('.dropdown-menu').classList.add('show');
   }

}
