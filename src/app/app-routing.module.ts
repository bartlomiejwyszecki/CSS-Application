import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { __generator } from 'tslib';
import { BannerGeneratorComponent } from './components/banner-generator/banner-generator.component';
import { GradientGeneratorComponent } from './components/gradient-generator/gradient-generator.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShapeGeneratorComponent } from './components/shape-generator/shape-generator.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shape-generator', component: ShapeGeneratorComponent },
  { path: 'gradient-generator', component: GradientGeneratorComponent },
  { path: 'banner-generator', component: BannerGeneratorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
