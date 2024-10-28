# Missing Provider shown in wrong standalone component (reproduction scenario)

You can fix it here:

```ts
@Component({
  selector: 'app-some-child-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>SomeChildComponent works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe]  // <-- This should be suggested
})
export class SomeChildComponent implements OnInit {
  private date = inject(DatePipe);

  ngOnInit() {
    console.log(this.date.transform(new Date));
  }
}
```

or here:

```ts
@Component({
  selector: 'app-some-routed-component',
  standalone: true,
  imports: [
    CommonModule,
    SomeChildComponent
  ],
  template: `<app-some-child-component>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe]  // <-- Angular suggests adding provider here but is this the right place?
})
export class SomeRoutedComponent { }
```

or here:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    DatePipe // also possible but depends on the use case
  ]
};
```
