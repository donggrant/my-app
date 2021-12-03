import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUserData]',
})
export class UserDataDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
