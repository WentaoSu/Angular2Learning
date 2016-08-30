import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: 
  `
  <h1>Inline Template</h1>
  <app-other></app-other>
  <app-another>
    <div>
      <h2>Hello!</h2>
      <p>World!</p>；
    </div>
  </app-another>

  <app-another>
    <p>Something else!</p>
  </app-another>
  <h1>Root Element</h1>
  <!--app-databinding></app-databinding-->
  <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
    <p #boundContent>{{test}}</p>
  </app-lifecycle>
  <button (click)="delete = true">Click To Delete</button>
  <button (click)="test = 'Changed value'">Click To Change Content</button>
  <button (click)="boundValue = 2000">Click To Change Binding</button>
  `,
  styles:[`
  h1 {color: red;}
  `]
})
export class AppComponent {
  title = 'app works! Yay!!';
  delete = false;
  test = 'Starting Value!';
  boundValue = 1000;
}
