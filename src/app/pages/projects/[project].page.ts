import { Component, inject } from '@angular/core';
import {
  AsyncPipe,
  JsonPipe,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  TitleCasePipe,
} from '@angular/common';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MainLayoutComponent } from '../../layouts/main-layout.component';
import { ReplacePipe } from '../../pipes/replace.pipe';
import { ProjectItem, ProjectService } from '../../services/project.service';
// import {injectContent, MarkdownComponent} from "@analogjs/content";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    JsonPipe,
    MainLayoutComponent,
    ReplacePipe,
    NgForOf,
    NgOptimizedImage,
    TitleCasePipe,
  ],
  template: `
    <layout-main>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="relative bg-base-200 pt-8 lg:pt-24">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
        >
          <div class="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div
                class="absolute inset-y-0 right-1/2 w-full bg-secondary rounded-r-3xl lg:right-72"
              ></div>
              <svg
                class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="fill-accent"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>

            <div
              class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"
            >
              <!-- Testimonial card-->
              <div class="relative p-6 rounded-2xl shadow-xl overflow-hidden">
                <!--                <img class="absolute inset-0 h-full w-full object-cover" [src]="'/images/wireframe-image.jpg'" alt="">-->
                <!--                <div class="absolute inset-0 bg-primary mix-blend-multiply"></div>-->
                <!--                <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary opacity-90"></div>-->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-primary to-primary"
                ></div>
                <div class="relative">
                  <div class="flex">
                    <p class="text-base-100 text-2xl">Project Name</p>
                    <div class="flex-1"></div>
                    <time class="">Date Time</time>
                  </div>
                  <p class="mt-5 text-base-300">
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi. Cursus faucibus
                    nunc nisl netus morbi vel porttitor vitae ut. Amet vitae
                    fames senectus vitae.
                  </p>
                  <div class="flex mt-4 bg-base-300 rounded-2xl p-2">
                    <div class="languages w-1/2 flex">
                      <img
                        [ngSrc]="stackImageMap[stackItem].src || ''"
                        [alt]="stackImageMap[stackItem].alt || ''"
                        width="20"
                        height="20"
                        *ngFor="let stackItem of item?.stack"
                      />
                    </div>
                    <div class="tags w-1/2 flex justify-end">
                      <span
                        [class]="
                          tagColorMap[tag] ||
                          'badge bg-primary-500 border-primary-500'
                        "
                        *ngFor="let tag of item?.tags"
                      >
                        {{ tag | titlecase }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
          >
            <!-- Content area -->
            <div class="pt-12 sm:pt-16 lg:pt-20">
              <h2
                class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl"
              >
                On a mission to empower teams
              </h2>
              <div class="mt-6 text-gray-500 space-y-6">
                <p class="text-lg">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
                <p class="text-base leading-7">
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p>
                <p class="text-base leading-7">
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <p class="text-base leading-7">
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <p class="text-base leading-7">
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <p class="text-base leading-7">
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <p class="text-base leading-7">
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <p class="text-base leading-7">
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <p class="text-base leading-7">
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <p class="text-base leading-7">
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
              </div>
            </div>

            <!--            <ng-container *ngIf="projectPost$ | async as post">-->
            <!--&lt;!&ndash;              <analog-markdown [content]="post.content"></analog-markdown>&ndash;&gt;-->
            <!--              <pre>-->
            <!--                {{post.content | json}}-->
            <!--              </pre>-->
            <!--            </ng-container>-->
          </div>
        </div>
      </div>
    </layout-main>
  `,
})
export default class ProjectDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);
  projectService = inject(ProjectService);
  // readonly projectPost$ = injectContent();

  projectId!: string;
  item: any;
  stackImageMap = this.projectService.stackImageMap;
  tagColorMap = this.projectService.tagColorMap;
  projectList = this.projectService.projectList;

  readonly productId$ = this.route.paramMap
    .pipe(map((params) => params.get('projects')))
    .subscribe((x) => {
      this.projectId = x as string;
      console.log(this.projectId);
      // console.log(this.projectList)
      if (this.projectId) {
        this.item = this.projectList.find((x) => x?.title === this.projectId);
        console.log(this.item);
      }
    });
}
