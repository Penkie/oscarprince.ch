import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-error',
    imports: [],
    templateUrl: './error.component.html',
    styleUrl: './error.component.scss',
    standalone: true
})
export class ErrorComponent {

  @Input() message = '';
}
