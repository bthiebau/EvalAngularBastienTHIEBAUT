import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddFormPageComponent } from './pages/add-form-page/add-form-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nouvelle-voiture', component: AddFormPageComponent },
    { path: '**', redirectTo: ''}
];
