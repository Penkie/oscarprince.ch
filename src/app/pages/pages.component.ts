import { Component } from '@angular/core';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    standalone: false
})
export class PagesComponent {

  public currentYear = new Date().getFullYear();
  public showMobileMenu = false;
}
