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
        <label for="my-drawer" class="drawer-overlay"></label>
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
