import {Component, inject, OnDestroy} from "@angular/core";
import {DrawerUiComponent} from "../components/drawer.ui.component";
import {NavBarUiComponent} from "../components/nav-bar.ui.component";
import {map, Subject} from "rxjs";
import {ActivatedRoute, RouterModule} from "@angular/router";

@Component({
  selector: 'layout-main',
  standalone: true,
  imports: [
    DrawerUiComponent,
    NavBarUiComponent,
  ],
  template: `
    <ui-nav-bar title="bloodred17." [fixed]="true" (hamburgerClick)="onHamburgerClick()"></ui-nav-bar>
    <ui-drawer [triggerDrawer]="triggerDrawer" [drawerName]="'main'">
      <ng-content></ng-content>
    </ui-drawer>
<!--    <p>Hello</p>-->


  `
})
export class MainLayoutComponent implements OnDestroy {
  triggerDrawer = new Subject<boolean>();

  onHamburgerClick() {
    // console.log('Hamburger clicked from layout-main');
    this.triggerDrawer.next(true);
  }

  ngOnDestroy() {
    this.triggerDrawer?.unsubscribe();
  }
}
