import {Injectable} from "@angular/core";
import {ImgDetails} from "../types/image";


export enum Stack {
  Angular = 'angular',
  Svelte = 'svelte',
  // Typescript = 'typescript',
  // Javascript = 'Javascript',
  // Rust = 'rust',
  // Vite = 'vite',
}

export enum Tag {
  Server = 'server',
  Webapp = 'webapp',
  Library = 'library',
}

export interface ProjectItem {
  // date: Date,
  title: string,
  slug?: string,
  description: string,
  stack: Stack[],
  tags: (Tag | string)[],
  indicator?: boolean,
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly stackImageMap: Record<Stack, ImgDetails> = {
    [Stack.Angular]: { src: '/svg/angular.svg', alt: 'Angular' },
    [Stack.Svelte]: { src: '/svg/svelte.svg', alt: 'Svelte' },
  }

  readonly tagColorMap: Record<Tag | string, string> = {
    [Tag.Server]: 'badge bg-orange-500 border-orange-500',
    [Tag.Webapp]: 'badge bg-purple-700 border-purple-700',
    [Tag.Library]: 'badge bg-green-600 border-green-600',
  }

  readonly projectList: ProjectItem[] = [
    {
      title: 'Project title',
      description: 'If a dog chews shoes whose shoes does he choose?',
      stack: [
        Stack.Angular,
      ],
      tags: [
        Tag.Server
      ]
    },
    {
      title: 'Project title',
      description: 'If a dog chews shoes whose shoes does he choose?',
      stack: [
        Stack.Svelte,
      ],
      tags: [
        Tag.Server
      ],
      indicator: true,
    },
    {
      title: 'Project title',
      description: 'If a dog chews shoes whose shoes does he choose?',
      stack: [
        Stack.Svelte,
      ],
      tags: [
        Tag.Webapp
      ]
    },
    {
      title: 'Project title',
      description: 'If a dog chews shoes whose shoes does he choose?',
      stack: [
        Stack.Angular,
      ],
      tags: [
        Tag.Library
      ]
    }
  ]
}
