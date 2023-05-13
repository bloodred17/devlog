import {Component, inject, Input} from "@angular/core";
import {NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'ui-nav-bar-responsive',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgForOf,
    TitleCasePipe,
    RouterLinkActive
  ],
  template: `
    <ng-template #defaultTitle>
      <a class="btn btn-ghost normal-case text-xl" [routerLink]="['/']">
        <span class="">blood</span>
        <span class="text-accent">Red</span>
        <span class="">17</span>
      </a>
    </ng-template>

    <div class="navbar bg-base-200"></div>
    <div class="navbar bg-base-300 fix">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl" [routerLink]="['/']" *ngIf="title; else defaultTitle"> {{title}} </a>
      </div>

      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li *ngFor="let menuItem of menu">
            <a [routerLink]="menuItem?.route" [routerLinkActive]="'bg-primary text-base-100'">
              {{menuItem?.name | titlecase}}
              <svg *ngIf="menuItem?.subMenu" class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="menu bg-base-100 w-56 p-2 rounded-box border-primary border-4" *ngIf="menuItem?.subMenu">
              <li *ngFor="let subMenuItem of menuItem?.subMenu">
                <a class="hover:bg-secondary" [routerLink]="subMenuItem?.route">{{subMenuItem?.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="navbar-end">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .fix {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100 !important;
    }
  `]
})
export class ResponsiveNavBarUiComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly menuService: MenuService = inject(MenuService);

  readonly menu = this.menuService.menu;

  @Input() title = '';
}
