import { Component } from '@angular/core';
import {MainLayoutComponent} from "../layouts/main-layout.component";
import {DrawerUiComponent} from "../components/drawer.ui.component";
import {NavBarUiComponent} from "../components/nav-bar.ui.component";
import {HelloComponent} from "../components/hello.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // MainLayoutComponent,
    // DrawerUiComponent,
    // NavBarUiComponent,
    HelloComponent,
    MainLayoutComponent,
  ],
  template: `
<!--    <app-hello></app-hello>-->
    <layout-main>
      <div class="hero min-h-screen" style="background-image: url(/images/wireframe-image.jpg);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there 🙋‍♂️</h1>
          </div>
        </div>
      </div>
  `,
  styles: [
    `
    `,
  ],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
