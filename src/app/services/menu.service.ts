import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  readonly menu = [
    {
      name: 'projects',
      route: '/projects',
    },
    {
      name: 'docs',
      route: '/docs',
      subMenu: [
        {
          name: 'anti-di',
          route: '/anti-di'
        },
        {
          name: 'simple-timeout',
          route: '/simple-timeout'
        }
      ]
    }
  ]
}
