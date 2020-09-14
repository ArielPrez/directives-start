import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if (!condition) {
      this.myVCRef.createEmbeddedView(this.myTemplateRef);
    } else {
      this.myVCRef.clear();
    }
  }
  constructor(private myTemplateRef: TemplateRef<any>, private myVCRef: ViewContainerRef) { }

}
