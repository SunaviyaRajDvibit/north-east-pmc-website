import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './Layout/home-layout/home-layout.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ServicesComponent } from './component/services/services.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: '', component: HomeLayoutComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'contact-us', component: ContactUsComponent },
            { path: 'services', component: ServicesComponent },
        ],
    },

    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

