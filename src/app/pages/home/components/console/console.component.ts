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
  public displayCaret = false;

  @ViewChild('console') private consoleRef!: ElementRef;
  @ViewChild('userInput') private userInput!: ElementRef;

  public ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  public toggleCaret(event: FocusEvent): void {
    console.log(event.type);
  }

  public submitInput(): void {
    this.outputs.push(`${this.userDisplay} ${this.input}`);
    this.input = '';
    this.scrollToBottom();
  }
  
  public scrollToBottom(): void {
    this.consoleRef.nativeElement.scrollTop = this.consoleRef.nativeElement.scrollHeight + '100';
  }

  public focusInput(): void {
    this.userInput.nativeElement.focus();
  }
}
