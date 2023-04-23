import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <h2>Project Details</h2>

    ID: {{ productId$ | async }}
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  `,
})
export default class ProjectDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly productId$ = this.route.paramMap.pipe(
    map((params) => params.get('project'))
  );
}


