import {
   Component,
   OnInit,
   OnChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy,
   Input,
   ViewChild,
   ContentChild
  }
from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundPElement>{{bindable}}</p>
    <p>{{boundPElement.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements
 OnChanges,
 OnInit,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy 
 {

  constructor() { }
  @Input() bindable = 1000;
  @ViewChild('boundPElement') boundPElement;
  @ContentChild('boundContent') boundContent : HTMLElement;
  ngOnChanges(){this.log('ngOnChanges')}
  ngOnInit() {this.log('ngOnInit')}
  ngDoCheck(){this.log('ngDoCheck')}
  ngAfterContentInit(){this.log('ngAfterContentInit');
    console.log(this.boundContent);
  }
  ngAfterContentChecked(){this.log('ngAfterContentChecked')}
  ngAfterViewInit(){this.log('ngAfterViewInit');
  var element:HTMLElement = this.boundPElement.nativeElement;
    console.log(element.textContent);
  }
  ngAfterViewChecked(){this.log('ngAfterViewChecked')
    console.log(this.boundPElement);
  }
  ngOnDestroy(){this.log('ngOnDestroy')}

  private log(hook: string){
    console.log(hook);
  }
}
