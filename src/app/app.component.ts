import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallCardComponent } from "./components/small-card/small-card.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { BigCardComponent } from "./components/big-card/big-card.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SmallCardComponent, MenuBarComponent, BigCardComponent, MenuTitleComponent, HomeComponent ]
})
export class AppComponent {
  title = 'angular-blog';
}
