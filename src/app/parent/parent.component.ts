import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentData: string = '';

  handleChildEvent(event: string) {
    console.log('Received from child:', event);
  }
}
