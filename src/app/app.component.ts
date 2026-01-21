import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowAllProductsComponent } from "./component/show-all-products/show-all-products.component";
import { HomeComponent } from "./component/home/home.component";
import { HeaderComponent } from "./component/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowAllProductsComponent, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-name';
}
