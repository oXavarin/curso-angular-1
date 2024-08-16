import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor = "white";

  @HostListener('mouseover') onMouseOver(data: Event) {
    const color = "lightgreen";
    this.backgroundColor = color;
  }

  @HostListener('mouseout') onMouseLeave(data: Event) {
    const color = "white";
    this.backgroundColor = color;
  }

  ngOnInit(): void {
    /* const color = "green";
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);*/
    this.renderer.setStyle(this.element.nativeElement, 'transition', "all 0.1s ease-in-out"); 

   /*  this.renderer.listen(this.element.nativeElement, "mouseover", (event) => {
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
    });


    this.renderer.listen(this.element.nativeElement, "mouseout", (event) => {
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
    });

    this.renderer.listen(this.element.nativeElement, "click", (event) => {
      const currentColor = this.element.nativeElement.style.backgroundColor;
      const toggleColor = currentColor === 'green' ? color : 'green';
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', toggleColor);
    }); */


  }
}
