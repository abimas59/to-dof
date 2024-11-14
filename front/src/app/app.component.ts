import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from "./components/footer/footer.component";
import { ReadAllComponent } from "./components/read-all/read-all.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatToolbarModule, FooterComponent, ReadAllComponent],
  templateUrl:'app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'todo';
}
