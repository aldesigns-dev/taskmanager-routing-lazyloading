import { Routes } from '@angular/router';

// import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component'; // Eager loading
import { NewTaskComponent, canLeaveEditPage } from '../tasks/new-task/new-task.component';
import { TaskComponent } from '../tasks/task/task.component';
import { resolveUserTasks } from '../tasks/tasks.component';
import { TasksService } from '../tasks/tasks.service';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'tasks',
//     pathMatch: 'full',
//   },
//   {
//     path: 'tasks', // <your-domain>/users/<uid>/tasks
//     component: TaskComponent,
//     // loadComponent: () => import('../tasks/tasks.component').then(mod => mod.TasksComponent), // Lazyloading
//     runGuardsAndResolvers: 'always',
//     resolve: {
//       userTasks: resolveUserTasks,
//     },
//   },
//   {
//     path: 'tasks/new',
//     component: NewTaskComponent,
//     canDeactivate: [canLeaveEditPage]
//   },
// ];

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService], // Lazy loading mbv app.routes
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        component: TaskComponent,
        // loadComponent: () => import('../tasks/tasks.component').then(mod => mod.TasksComponent), // Lazyloading
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage]
      },
    ]
  }
];