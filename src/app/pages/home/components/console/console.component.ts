import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements AfterViewChecked {

  public outputs: string[] = [];
  public input: string = '';
  public userDisplay = 'anonymous@oscarprince.ch:~$';

  @ViewChild('console') private consoleRef!: ElementRef;

  public ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  public submitInput(): void {
    this.outputs.push(`${this.userDisplay} ${this.input}`);
    this.input = '';
    this.scrollToBottom();
  }
  
  public scrollToBottom(): void {
    this.consoleRef.nativeElement.scrollTop = this.consoleRef.nativeElement.scrollHeight + '100';
  }
}
