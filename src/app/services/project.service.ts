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

export enum ContentType {
  H1 = 'heading-1',
  H2 = 'heading-2',
  H3 = 'heading-3',
  H4 = 'heading-4',
  Code = 'code',
  Para = 'para',
  OL = 'ordered-list',
  UL = 'unordered-list',
  Link = 'link',
  Md = 'markdown',
  HTML = 'html'
}

export interface Content {
  type: ContentType,
  data: string,
}

export interface ProjectItem {
  date?: Date,
  title: string,
  slug?: string,
  description: string,
  stack: Stack[],
  tags: (Tag | string)[],
  indicator?: boolean,
  content?: Content[],
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
      title: 'project_title',
      description: 'If a dog chews shoes whose shoes does he choose?',
      stack: [
        Stack.Angular,
      ],
      tags: [
        Tag.Server
      ],
      content: [
        {
          type: ContentType.Md,
          data: '# Hello'
        }
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
