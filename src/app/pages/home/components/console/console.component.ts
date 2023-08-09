import { Component } from '@angular/core';

@Component({
  selector: 'console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent {

  public outputs: string[] = [];
  public input: string = '';
  public userDisplay = 'anonymous@oscarprince.ch:~$';

  public submitInput(): void {
    this.outputs.push(`${this.userDisplay} ${this.input}`);
    this.input = '';
  }
}
