# Starting with the Angular Framework

## Topics to Cover

1. **Components**
   - Definition: Building blocks of Angular applications.
   - Functions: Control views, manage data, and handle user interactions.
   - Interactions: Communicate with services and other components.

2. **Services**
   - Definition: Singleton objects that provide functionality across components.
   - Functions: Handle business logic, data retrieval, and shared state.
   - Interactions: Injected into components to provide data and functionality.

3. **Modules**
   - Definition: Containers for a cohesive block of code dedicated to an application domain.
   - Functions: Organize components, services, and other modules.
   - Interactions: Facilitate lazy loading and modularization of the application.

4. **Interfaces**
   - Definition: Contracts for the structure of objects.
   - Functions: Define the shape of data, ensuring type safety.
   - Interactions: Used to enforce consistency across components and services.

5. **Pages**
   - Definition: Components that represent a view or screen in the application.
   - Functions: Render UI elements and manage user navigation.
   - Interactions: Can utilize components and services to display data.

## Deployment on GitHub Pages
- Steps to Deploy:
  1. Build the Angular application using `ng build --prod`.
  2. Create a new GitHub repository.
  3. Push the contents of the `dist` folder to the `gh-pages` branch.
  4. Enable GitHub Pages in the repository settings.

- Accessing the Application:
  - Once deployed, access the application via the browser using the GitHub Pages URL.
