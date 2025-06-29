import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, Header, RouterModule],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
  `,
  styles: [`
    main {
      padding: 16px;
    }
  `],
})
export class App {
  protected title = 'first-angular-app';
}
