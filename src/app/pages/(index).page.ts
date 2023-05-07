import {Component} from '@angular/core';
import {MainLayoutComponent} from "../layouts/main-layout.component";
import {HelloComponent} from "../components/hello.component";
import {ResponsiveNavBarUiComponent} from "../components/responsive-nav-bar.ui.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HelloComponent,
    MainLayoutComponent,
    ResponsiveNavBarUiComponent,
  ],
  template: `
    <ui-nav-bar-responsive></ui-nav-bar-responsive>
    <div class="hero h-[90vh]" style="background-image: url(/images/wireframe-image.jpg);">
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
