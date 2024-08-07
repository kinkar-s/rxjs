import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreationAjaxOperatorComponent } from './creation-ajax-operator/creation-ajax-operator.component';
import { filter, from, map, of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreationAjaxOperatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  // Creating Observables: Observables can be created using various methods provided by RxJS, such as of, from, interval, timer, and ajax. For example:
  observable = of(1, 2, 3);

  ngOnInit(): void {
    //Subscribing to Observables: To consume the values emitted by an observable, you subscribe to it:
    this.observable.subscribe((value) => console.log('observable', value));

    //Observers are objects that receive data from observables. An observer can define three types of handlers:
    const observer = {
      next: (x: any) => console.log('Next:', x),
      error: (err: any) => console.log('Error:', err),
      complete: () => console.log('Complete'),
    };
    this.observable.subscribe(observer);

    // Operators are functions that enable you to transform, filter, and manipulate data from observables. They can be categorized into various types:
    const observable2 = from([1, 2, 3, 4, 5]);
    observable2
      .pipe(
        filter((x) => x % 2 === 0),
        map((x) => x * 10)
      )
      .subscribe((value) => console.log('observable2', value)); // Output: 20, 40

    // Subjects are special types of observables that act as both an observable and an observer. They can multicast values to multiple subscribers. There are different types of subjects:
    const subject = new Subject();
    subject.subscribe((value) => console.log('Observer 1:', value));
    subject.next(1); // Output: Observer 1: 1
    subject.subscribe((value) => console.log('Observer 2:', value));
    subject.next(2); // Output: Observer 1: 2, Observer 2: 2
  }
}
