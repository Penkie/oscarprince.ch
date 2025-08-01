import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Command } from './models/command.model';

@Component({
    selector: 'console',
    templateUrl: './console.component.html',
    styleUrls: ['./console.component.scss'],
    standalone: false
})
export class ConsoleComponent implements AfterViewChecked, OnInit {

  public outputs: string[] = [];
  public input: string = '';
  public userDisplay = 'anonymous@oscarprince.ch:~$';
  public displayCaret = false;
  public commands: Array<Command> = [];

  @ViewChild('console') private consoleRef!: ElementRef;
  @ViewChild('userInput') private userInput!: ElementRef;

  constructor(
    private http: HttpClient
  ) {}

  public ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  public ngOnInit(): void {
    this.http.get<Array<Command>>('assets/commands.json')
      .subscribe(commands => this.commands = commands);
  }

  public submitInput(): void {
    this.outputs.push(`${this.userDisplay} ${this.input}`);
    this.searchAndOutputCommand(this.input);
    this.input = '';
    this.scrollToBottom();
  }

  public searchAndOutputCommand(input: string): void {
    const command = this.commands.find(e => e.input === input.toLowerCase());
    if (command) {
      this.outputs.push(command.output);
    }
  }
  
  public scrollToBottom(): void {
    this.consoleRef.nativeElement.scrollTop = this.consoleRef.nativeElement.scrollHeight + '100';
  }

  public focusInput(): void {
    this.userInput.nativeElement.focus();
  }
}
