import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftNavigationComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreRoutingModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: []
})

export class CoreModule { }
