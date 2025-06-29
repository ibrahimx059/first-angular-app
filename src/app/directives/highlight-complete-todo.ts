import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleteTodo]'
})
export class HighlightCompleteTodo {
 isComplete = input(false);
  constructor() { }
  el = inject(ElementRef);
 stylesEffect =  effect(() => 
  {
    if (this.isComplete()) {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    }else
    {
      this.el.nativeElement.style.backgroundColor = 'transparent';
    }
  });
}
