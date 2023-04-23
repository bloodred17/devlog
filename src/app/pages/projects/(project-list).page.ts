import {Component, OnDestroy} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloComponent} from "../../components/hello.component";
import {NavBarUiComponent} from "../../components/nav-bar.ui.component";
import {DrawerUiComponent} from "../../components/drawer.ui.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MainLayoutComponent} from "../../layouts/main-layout.component";

enum Stack {
  Angular = 'angular',
  Svelte = 'svelte',
  // Typescript = 'typescript',
  // Javascript = 'Javascript',
  // Rust = 'rust',
  // Vite = 'vite',
}

enum Tag {
  Server = 'server',
  Webapp = 'webapp',
  Library = 'library',
}

interface ProjectItem {
  // date: Date,
  title: string,
  description: string,
  stack: Stack[],
  tags: (Tag | string)[],
  indicator?: boolean,
}

interface ImgDetails {
  src: string,
  alt: string,
}

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
  ],
  template: `
<!--    <app-hello></app-hello>-->
    <layout-main>
      <div class="hero h-50 cursor-default">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <p class="py-6">Here's
              <span class="border-b border-b-4 border-b-primary hover:bg-primary hover:text-base-100 hover:border-b-accent transition-all ease-in delay-50">some of my work</span>
              I've managed to do in my free time.
            </p>
          </div>
        </div>
      </div>

      <div class="px-16 grid grid-cols-3 gap-4">
        <ng-container *ngFor="let projectItem of projectList">
          <ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{projectItem}"></ng-container>
        </ng-container>
      </div>

      <ng-template let-item="projectItem" #itemTemplate>
        <div class="card hover:bg-secondary cursor-pointer bg-base-100 shadow-xl indicator transition-all ease-in delay-50ð">
          <span class="indicator-item badge badge-accent" *ngIf="item?.indicator"></span>
          <div class="card-body">
            <h2 class="card-title">{{item?.title}}</h2>
            <p>{{item?.description}}</p>
            <div class="flex mt-2">
              <div class="languages w-1/2 flex">
                <img [ngSrc]="stackImageMap[stackItem].src || ''" alt="Angular" width="20" height="20" *ngFor="let stackItem of item?.stack">
              </div>
              <div class="tags w-1/2 flex justify-end">
                <span [class]="tagColorMap[tag] || 'badge bg-primary-500 border-primary-500'" *ngFor="let tag of item?.tags">{{tag | titlecase}}</span>
              </div>
            </div>
          </div>
        </div>
      </ng-template>
    </layout-main>

  `,
  styles: [
    `
      .indicator {
        width: unset;
      }
    `
  ]
})
export default class ProjectListPageComponent {
  stackImageMap: Record<Stack, ImgDetails> = {
    [Stack.Angular]: { src: '/svg/angular.svg', alt: 'Angular' },
    [Stack.Svelte]: { src: '/svg/svelte.svg', alt: 'Svelte' },
  }
  tagColorMap: Record<Tag | string, string> = {
    [Tag.Server]: 'badge bg-orange-500 border-orange-500',
    [Tag.Webapp]: 'badge bg-purple-700 border-purple-700',
    [Tag.Library]: 'badge bg-green-600 border-green-600',
  }
  projectList: ProjectItem[] = [
    {
      title: 'Project title',
      description: 'If a dog chews shoes whose shoes does he choose?',
      stack: [
        Stack.Angular,
      ],
      tags: [
        Tag.Server
      ]
    },
    {
      title: 'Project title',
      description: 'If a dog chews shoes whose shoes does he choose?',
      stack: [
        Stack.Svelte,
      ],
      tags: [
        Tag.Server
      ],
      indicator: true,
    },
    {
      title: 'Project title',
      description: 'If a dog chews shoes whose shoes does he choose?',
      stack: [
        Stack.Svelte,
      ],
      tags: [
        Tag.Webapp
      ]
    },
    {
      title: 'Project title',
      description: 'If a dog chews shoes whose shoes does he choose?',
      stack: [
        Stack.Angular,
      ],
      tags: [
        Tag.Library
      ]
    }
  ]
}
