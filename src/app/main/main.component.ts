import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Project } from '../common/models/project.model';
import { ColorService } from '../common/services/color.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public colors = ["#e24444", "#e28344", "#71e244", "#44d7e2", "#446ee2", "#8e44e2", "#e24486"];
  public selectedColor: string = '';
  public projects: Project[] | undefined;

  constructor(
    private router: Router,
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
    // À l'initialisation on sélectionne une couleur, car par défaut c'est un string vide
    this.selectedColor = this.selectNewColor();
    this.colorService.setColor(this.selectedColor);

    // Au changement de route on va changer la couleur
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.selectedColor = this.selectNewColor();
        this.colorService.setColor(this.selectedColor);
      }
    });
  }

  /**
   * À l'aide de la méthode findNewColorIndex, on va aller chercher une nouvelle couleur dans la liste colors
   * @returns la couleur en hex
   */
  public selectNewColor(): string {
    return this.colors[this.findNewColorIndex()];
  }

  /**
   * Cherche un index aléatoire d'une couleur qui n'a pas été affichée en dernier
   * @returns l'index de la couleur qui est forcément différente à l'ancienne
   */
  public findNewColorIndex(): number {
    const findColorIndex = this.colors.findIndex((e) => e === this.selectedColor);
    const randomNewIndex = Math.floor(Math.random() * this.colors.length);
    return randomNewIndex === findColorIndex ? this.findNewColorIndex() : randomNewIndex;
  }

}
