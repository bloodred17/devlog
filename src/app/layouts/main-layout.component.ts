import {Component, inject, OnDestroy} from "@angular/core";
import {DrawerUiComponent} from "../components/drawer.ui.component";
import {NavBarUiComponent} from "../components/nav-bar.ui.component";
import {map, Subject} from "rxjs";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {ResponsiveNavBarUiComponent} from "../components/responsive-nav-bar.ui.component";

@Component({
  selector: 'layout-main',
  standalone: true,
  imports: [
    DrawerUiComponent,
    NavBarUiComponent,
    ResponsiveNavBarUiComponent,
  ],
  template: `
<!--    <ui-nav-bar [fixed]="true" (hamburgerClick)="onHamburgerClick()"></ui-nav-bar>-->
<!--    <ui-drawer [triggerDrawer]="triggerDrawer" [drawerName]="'main'">-->
<!--      <ng-content></ng-content>-->
<!--    </ui-drawer>-->
    <ui-nav-bar-responsive></ui-nav-bar-responsive>
    <ng-content></ng-content>
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
