import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import {Subject} from "rxjs";
import {RouterLink} from "@angular/router";

export type DrawerState = 'open' | 'close';

@Component({
  selector: 'ui-drawer',
  standalone: true,
  template: `
<!--    <ng-content select="[header]"></ng-content>-->
    <div class="drawer">
      <input [id]="drawerName" type="checkbox" class="drawer-toggle"/>
      <div class="drawer-content bg-base-200">
        <!-- Page content here -->
        <label [for]="drawerName" class="btn btn-primary drawer-button hidden" #drawerButton>Open drawer</label>
        <ng-content></ng-content>
      </div>
      <div class="drawer-side">
        <label [for]="drawerName" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <li><a routerLink="/projects">Projects</a></li>
          <li><a routerLink="/blogs">Blogs</a></li>
        </ul>
      </div>
    </div>
  `,
  imports: [
    RouterLink
  ],
  styles: [
    `
      .drawer-content {
        z-index: 0 !important;
        /*background-image: url(/images/the-great-wave-off-kanagawa-vector-3.jpg);*/
        /*background-position: center;*/
        /*background-repeat: no-repeat;*/
        /*background-size: contain;*/

        background-color: #fcf9f7;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23f9a592' fill-opacity='0.15'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");

        /*background-color: #FCEEE6;*/
        /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%23FCEEE6'/%3E%3Cstop offset='1' stop-color='%23F9A592'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%23fbe9df'/%3E%3Cstop offset='1' stop-color='%23f79a89'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%23fbe3d7'/%3E%3Cstop offset='1' stop-color='%23f59081'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%23faddd0'/%3E%3Cstop offset='1' stop-color='%23f38578'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%23fad7c9'/%3E%3Cstop offset='1' stop-color='%23f17970'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%23f9d1c1'/%3E%3Cstop offset='1' stop-color='%23ee6e68'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%23f9cab9'/%3E%3Cstop offset='1' stop-color='%23eb6361'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%23f9c3b2'/%3E%3Cstop offset='1' stop-color='%23e8595b'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%23f9bcaa'/%3E%3Cstop offset='1' stop-color='%23e55258'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%23f9b5a2'/%3E%3Cstop offset='1' stop-color='%23e24b55'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%23f9ad9a'/%3E%3Cstop offset='1' stop-color='%23de4453'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%23F9A592'/%3E%3Cstop offset='1' stop-color='%23DA3D51'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E");*/
        /*background-attachment: fixed;*/
        /*background-size: cover;*/
      }

      .menu a {
        @apply hover:bg-secondary
      }
    `
  ]
})
export class DrawerUiComponent implements OnInit, OnDestroy {
  @Input() drawerName = 'my-drawer';
  isDrawerOpen = false;
  @Input() drawerState: DrawerState = 'close';
  @Output() drawerStateChange = new EventEmitter<DrawerState>();

  @ViewChild('drawerButton') myDiv!: ElementRef<HTMLElement>;

  @Input() triggerDrawer!: Subject<boolean>;

  ngOnInit() {
    this.isDrawerOpen = this.drawerState === 'open';
    this.triggerDrawer.subscribe((x) => {
      console.log(x);
      this.triggerFalseClick();
    });
  }

  triggerFalseClick() {
    let el: HTMLElement = this.myDiv.nativeElement;
    el.click();
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawerState = (this.isDrawerOpen) ? 'open' : 'close';
    this.drawerStateChange.emit(this.drawerState);
  }

  ngOnDestroy() {
    this.triggerDrawer?.unsubscribe();
  }
}
