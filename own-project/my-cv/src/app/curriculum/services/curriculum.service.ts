import { Injectable } from '@angular/core';
import { navItem } from '../interfaces/nav-item.interface';
import { GitHubProject } from '../interfaces/project-interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurriculumService {
  private baseUrl: string = `https://api.github.com/users/VidalMiquel/starred`;

  constructor(private http: HttpClient) {}

  public navItems: navItem[] = [
    {
      redirectName: 'portfolio',
      name: 'Portfolio',
    },
    {
      redirectName: 'about',
      name: 'About',
    },
    {
      redirectName: 'contact',
      name: 'Contact',
    },
  ];

  getNavItems(): navItem[] {
    return this.navItems;
  }

  getProjectsHttpRequest(): Observable<GitHubProject[] | undefined> {
    return this.http.get<GitHubProject[]>(this.baseUrl).pipe(
      tap((projects) => {
        // Imprimir en consola los proyectos obtenidos
        console.log('Proyectos obtenidos:', projects);
      }),
      catchError((error) => {
        console.error('Error fetching projects:', error);
        return of(undefined);
      })
    );
  }
}
