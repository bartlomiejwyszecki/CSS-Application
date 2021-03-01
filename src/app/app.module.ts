import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { ShapeGeneratorComponent } from './components/shape-generator/shape-generator.component';
import { GradientGeneratorComponent } from './components/gradient-generator/gradient-generator.component';
import { BannerGeneratorComponent } from './components/banner-generator/banner-generator.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CircleShapesComponent } from './components/shape-generator/circle-shapes/circle-shapes.component';
import { TriangleShapesComponent } from './components/shape-generator/triangle-shapes/triangle-shapes.component';
import { QuadrangleShapesComponent } from './components/shape-generator/quadrangle-shapes/quadrangle-shapes.component';
import { LinearComponent } from './components/gradient-generator/linear/linear.component';
import { RadialComponent } from './components/gradient-generator/radial/radial.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ShapeGeneratorComponent,
    GradientGeneratorComponent,
    BannerGeneratorComponent,
    PageNotFoundComponent,
    CircleShapesComponent,
    TriangleShapesComponent,
    QuadrangleShapesComponent,
    LinearComponent,
    RadialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
