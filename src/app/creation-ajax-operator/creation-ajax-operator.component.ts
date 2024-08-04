import { Component, inject } from '@angular/core';
import {
  catchError,
  combineLatest,
  interval,
  map,
  merge,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { AppService } from '../app.service';
import { Chat } from '../app.model';

export function userData() {
  return {
    id: 4,
    firstName: 'Kinkar',
    lastName: 'sarkar',
    email: 's.b@example.com',
    age: 30,
    gender: 'Male',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
    phone: '555-1234',
    isActive: true,
    registered: '2023-01-15',
  };
}
@Component({
  selector: 'app-creation-ajax-operator',
  standalone: true,
  imports: [],
  templateUrl: './creation-ajax-operator.component.html',
  styleUrl: './creation-ajax-operator.component.scss',
})
export class CreationAjaxOperatorComponent {
  //Example 1: Fetching and Transforming User Data
  fetchUserData$ = ajax.getJSON('/api/users').pipe(
    map((response: any) => response),
    tap((response) => console.log('res', response)),
    map((users: any[]) =>
      users
        .filter((user) => user.isActive) // Filter active users
        .map((user) => ({
          // Map each user to include fullName
          ...user,
          fullName: `${user.firstName} ${user.lastName}`,
        }))
    )
  );

  //Example 2: Polling for Real-Time Stock Prices
  pollStockPrices$ = interval(5000).pipe(
    switchMap(() => ajax.getJSON('/api/stocks')),
    map((response: any) => response),
    catchError((error) => {
      console.error('Error polling stock prices:', error);
      return of([]);
    })
  );

  //Example 3: Submitting a Form with Validation
  submitFormData$ = ajax
    .post('/api/users', userData(), { 'Content-Type': 'application/json' })
    .pipe(
      map((response) => response),
      switchMap((response: any) => {
        if (response.response.id) {
          return of(response);
        } else {
          throw new Error('Form submission failed');
        }
      }),
      catchError((error) => {
        console.error('Error submitting form:', error);
        return of({ error: true, message: 'Failed to submit form' });
      })
    );

  // Example 4: Aggregating and Manipulating Multiple Data Sources
  aggregateData$ = combineLatest([
    ajax.getJSON('/api/users').pipe(map((response) => response)),
    ajax.getJSON('/api/stocks').pipe(map((response) => response)),
  ]).pipe(
    map(([data1, data2]) => ({ ...(data1 as object), ...(data2 as object) })),
    switchMap((aggregatedData) => of(aggregatedData)),
    catchError((error) => {
      console.error('Error aggregating data:', error);
      return of({ error: true, message: 'Failed to aggregate data' });
    })
  );

  // Example 5: Real-Time Chat Application
  fetchMessages = () => ajax.getJSON('/api/chats');
  localDrafts$ = of([{ id: 'local1', text: 'Draft message', user: 'User1' }]);
  loadAndSyncMessages$ = merge(this.fetchMessages(), this.localDrafts$).pipe(
    tap((messages) => console.log('messages', messages)),
    map((messages: any) =>
      messages.map((msg: Chat[]) => ({ ...msg, timestamp: new Date() }))
    ),
    switchMap((allMessages) => of(allMessages)),
    catchError((error) => {
      console.error('Error fetching messages:', error);
      return of([{ error: true, message: 'Failed to load messages' }]);
    })
  );

  //Example 6: Dynamic Form Configuration
  fetchFormConfig$ = ajax.getJSON('/api/formConfig');
  fetchUserPreferences$ = ajax.getJSON('/api/user');
  loadAndMergeFormConfig$ = combineLatest([
    this.fetchFormConfig$,
    this.fetchUserPreferences$,
  ]).pipe(
    map(([formConfig, userPreferences]) => {
      return {
        ...(formConfig as object),
        controls: (formConfig as any).controls.map((control: any) => ({
          ...control,
          value: (userPreferences as any)[control.name],
        })),
      };
    }),
    switchMap((finalConfig) => of(finalConfig)),
    catchError((error) => {
      console.error('Error loading form config:', error);
      return of({ error: true, message: 'Failed to load form configuration' });
    })
  );

  ngOnInit(): void {
    //Example 1
    this.fetchUserData$.subscribe({
      next: (users) => console.log('users', users),
      error: (err) => console.log('Error:', err),
      complete: () => console.log('complete'),
    });

    //Example 2
    this.pollStockPrices$.subscribe({
      next: (prices) => console.log('Stock Prices:', prices),
      error: (err) => console.error('Error:', err),
    });

    //Example 3
    // this.submitFormData$.subscribe({
    //   next: (user) => console.log('Submit User Data:', user),
    //   error: (err) => console.error('Error:', err),
    // });

    //Example 4
    this.aggregateData$.subscribe({
      next: (user) => console.log('aggregate Data:', user),
      error: (err) => console.error('Error:', err),
    });

    //Example 5
    this.loadAndSyncMessages$.subscribe({
      next: (msg) => console.log('loadAndSyncMessages Data:', msg),
      error: (err) => console.error('Error:', err),
    });

    //Example 6
    this.loadAndMergeFormConfig$.subscribe({
      next: (formConfig) =>
        console.log('loadAndMergeFormConfig Data:', formConfig),
      error: (err) => console.error('Error:', err),
    });
  }
}
