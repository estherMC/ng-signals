import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    //Signals operations --> set, update, mutate...
    // this.counter.update((oldCounter) => oldCounter + 1);
    //Alternatives:
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
    // this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    //Same than option of increment in an alternative way:
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
    // this.actions.push('DECREMENT');
  }
}
