import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: 'mfe1',
        loadComponent: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4300/remoteEntry.js',
                exposedModule: './Mfe1Component',
            }).then(m => m.Mfe1Component),
    },
    // {
    //     path: 'mfe2',
    //     loadComponent: () =>
    //         loadRemoteModule({
    //             type: 'module',
    //             remoteEntry: 'http://localhost:4400/remoteEntry.js',
    //             exposedModule: './Mfe2Component',
    //         }).then(m => m.Mfe2Component),
    // },
    // {
    //     path: 'ReactMFEComponent',
    //     loadComponent: () =>
    //         loadRemoteModule({
    //             type: 'module',
    //             remoteEntry: 'http://localhost:4500/remoteEntry.js',
    //             exposedModule: './ReactMFEComponent',
    //         }).then(m => m.ReactMFEComponent),
    // },
    {
        path: '',
        redirectTo: 'mfe1',
        pathMatch: 'full',
    },
];