import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootNodeComponent } from './components/root-node/root-node.component';
import { ChildNodeComponent } from './components/child-node/child-node.component';

@NgModule({
  declarations: [
    AppComponent,
    RootNodeComponent,
    ChildNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
