import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SomeChildComponent } from './SomeChildComponent.component';

@Component({
  selector: 'app-some-routed-component',
  standalone: true,
  imports: [
    CommonModule,
    SomeChildComponent
  ],
  template: `<app-some-child-component>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  //providers: [DatePipe]
})
export class SomeRoutedComponent { }
