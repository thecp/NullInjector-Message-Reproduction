import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-child-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>SomeChildComponent works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  //providers: [DatePipe]
})
export class SomeChildComponent implements OnInit {
  private date = inject(DatePipe);

  ngOnInit() {
    console.log(this.date.transform(new Date));
  }
}
