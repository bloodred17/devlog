import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MenuService} from "../services/menu.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ui-nav-bar',
  standalone: true,
  template: `
    <div class="navbar one bg-base-200" *ngIf="fixed">
    </div>
    <div class="navbar bg-base-300" [ngClass]="{'two': fixed}">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost" (click)="onHamburgerClick()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div class="navbar-start flex">
        <a class="btn btn-ghost normal-case text-xl"> {{title}} </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li *ngFor="let menuItem of menu">
            <a [routerLink]="menuItem?.route">
              {{menuItem?.name | titlecase}}
              <svg *ngIf="menuItem?.subMenu" class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="menu bg-base-100 w-56 p-2 rounded-box" *ngIf="menuItem?.subMenu">
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
    <!--    </div>-->
  `,
  imports: [
    CommonModule,
    RouterLink,
  ],
  styles: [
    `
      .two {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100 !important;
      }
    `
  ]
})
export class NavBarUiComponent {
  @Input() title = '';
  @Output() hamburgerClick = new EventEmitter<void>();
  @Input() fixed: boolean = false;

  readonly menu!: any[];

  constructor(
    private menuService: MenuService,
  ) {
    this.menu = this.menuService.menu;
  }

  onHamburgerClick() {
    // console.log('Hamburger clicked from nav-bar');
    this.hamburgerClick.emit();
  }
}
