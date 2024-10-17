import { Injectable } from '@angular/core';
import { navItem } from '../interfaces/nav-item.interface';
import { project } from '../interfaces/project-interface';

@Injectable({providedIn: 'root'})
export class CurriculumService {
  constructor() { }

  public navItems: navItem[] = [{

    redirectName: 'portfolio',
    name: 'Portfolio'
  }, {
    redirectName: 'about',
    name: 'About'
  },{
    redirectName: 'contact',
    name: 'Contact'
  }
  ];

  getNavItems(): navItem[]{
    return this.navItems;
  }

  public projects: project[] = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A personal portfolio website to showcase my work.",
      githubLink: "https://github.com/username/portfolio",
      year: "2023"
    },
    {
      id: 2,
      name: "E-Commerce App",
      description: "An e-commerce application built with Angular and Node.js.",
      githubLink: "https://github.com/username/e-commerce-app",
      year: "2022"
    },
    {
      id: 3,
      name: "Weather App",
      description: "A weather application that fetches data from a weather API.",
      githubLink: "https://github.com/username/weather-app",
      year: "2021"
    },
    {
      id: 4,
      name: "Task Manager",
      description: "A task management tool to help organize daily tasks.",
      githubLink: "https://github.com/username/task-manager",
      year: "2023"
    },
    {
      id: 5,
      name: "Chat Application",
      description: "A real-time chat application using WebSocket.",
      githubLink: "https://github.com/username/chat-app",
      year: "2022"
    }
  ];

  getProjects(): project[]{
    return this.projects;
  }

}
