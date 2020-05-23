import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { TopicDetailsComponent } from '../components/topic-details/topic-details.component';

const coreRoutes: Routes = [
  { path: '', component: AppLayoutComponent, children: [
    {path: 'topic/:name', component: TopicDetailsComponent}
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
