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
  ]
}
