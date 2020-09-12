import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    // Called after the constructor,
    // initializing input properties, and the first call to ngOnChanges.
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

}
