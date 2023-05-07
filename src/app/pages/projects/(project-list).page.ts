import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HelloComponent } from '../../components/hello.component';
import { NavBarUiComponent } from '../../components/nav-bar.ui.component';
import { DrawerUiComponent } from '../../components/drawer.ui.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MainLayoutComponent } from '../../layouts/main-layout.component';
import { ReplacePipe } from '../../pipes/replace.pipe';
import { ProjectService } from '../../services/project.service';
import {ResponsiveNavBarUiComponent} from "../../components/responsive-nav-bar.ui.component";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    // NgForOf,
    RouterOutlet,
    HelloComponent,
    NavBarUiComponent,
    DrawerUiComponent,
    CommonModule,
    NgOptimizedImage,
    MainLayoutComponent,
    ReplacePipe,
    RouterLink,
    ResponsiveNavBarUiComponent,
  ],
  template: `
    <ui-nav-bar-responsive></ui-nav-bar-responsive>

    <div class="hero h-50 cursor-default">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <p class="py-6">
            Here's
            <span
              class="border-b border-b-4 border-b-primary hover:bg-primary hover:text-base-100 hover:border-b-accent transition-all ease-in delay-50"
              >some of my work</span
            >
            I've managed to do in my free time.
          </p>
        </div>
      </div>
    </div>

    <div class="px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ng-container *ngFor="let projectItem of projectList">
        <ng-container
          [ngTemplateOutlet]="itemTemplate"
          [ngTemplateOutletContext]="{projectItem}"
        ></ng-container>
      </ng-container>
    </div>

    <ng-template let-item="projectItem" #itemTemplate>
      <div
        class="card hover:bg-secondary cursor-pointer bg-base-100 shadow-xl indicator transition-all ease-in delay-50"
        [routerLink]="item?.slug"
      >
        <span
          class="indicator-item badge badge-accent"
          *ngIf="item?.indicator"
        ></span>
        <div class="card-body">
          <h2 class="card-title">{{ item?.name }}</h2>
          <p>{{ item?.description }}</p>
          <div class="flex mt-2">
            <div class="languages w-1/2 flex">
              <img
                [ngSrc]="stackImageMap[stackItem].src || ''"
                [alt]="stackImageMap[stackItem].alt || ''"
                width="20"
                height="20"
                *ngFor="let stackItem of item?.stack"
              />
            </div>
            <div class="tags w-1/2 flex justify-end">
              <span
                [class]="
                  tagColorMap[tag] ||
                  'badge bg-primary-500 border-primary-500'
                "
                *ngFor="let tag of item?.tags"
              >
                {{ tag | titlecase }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: [
    `
      .indicator {
        width: unset;
      }
    `,
  ],
})
export default class ProjectListPageComponent {
  projectService = inject(ProjectService);
  stackImageMap: any = this.projectService.stackImageMap;
  tagColorMap: any = this.projectService.tagColorMap;
  projectList = this.projectService.projectList;
}
