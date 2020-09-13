import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Called after the constructor,
    // initializing input properties, and the first call to ngOnChanges.
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
  }

  @HostListener('mouseenter') mouseenter(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
