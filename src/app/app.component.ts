import { Component } from '@angular/core';
import Item from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lee Rohrer\'s To Do App';

  filter: 'all' | 'complete' | 'active' = 'all';

  allItems = [
    { description: 'run (test)', complete: true },
    { description: 'stretch (test)', complete: true },
    { description: 'read (test)', complete: false },
    { description: 'write (test)', complete: false },
    { description: 'eat (test)', complete: false },
    { description: 'work (test)', complete: false },
    { description: 'rest (test)', complete: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'complete' ? item.complete : !item.complete
    );
  }

  addItem(description: string) {
    this.allItems.push({
      description,
      complete: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
