import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { __generator } from 'tslib';
import { BannerGeneratorComponent } from './components/banner-generator/banner-generator.component';
import { GradientGeneratorComponent } from './components/gradient-generator/gradient-generator.component';
import { LinearComponent } from './components/gradient-generator/linear/linear.component';
import { RadialComponent } from './components/gradient-generator/radial/radial.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CircleShapesComponent } from './components/shape-generator/circle-shapes/circle-shapes.component';
import { QuadrangleShapesComponent } from './components/shape-generator/quadrangle-shapes/quadrangle-shapes.component';
import { ShapeGeneratorComponent } from './components/shape-generator/shape-generator.component';
import { TriangleShapesComponent } from './components/shape-generator/triangle-shapes/triangle-shapes.component';
import { TypographyComponent } from './components/typography/typography.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shape-generator', component: ShapeGeneratorComponent,
        children: [
          { path: 'circle-shapes', component: CircleShapesComponent },
          { path: 'triangle-shapes', component: TriangleShapesComponent },
          { path: 'quadrangle-shapes', component: QuadrangleShapesComponent }
        ] 
  },
  { path: 'gradient-generator', component: GradientGeneratorComponent,
        children: [
          { path: 'linear', component: LinearComponent },
          { path: 'radial', component: RadialComponent }
        ] 
  },
  { path: 'banner-generator', component: BannerGeneratorComponent },
  { path: 'typography', component: TypographyComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
