import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RootNodeComponent } from './componenets/root-node/root-node.component';
import { ChildNodeComponent } from './componenets/child-node/child-node.component';

@NgModule({
  declarations: [AppComponent, RootNodeComponent, ChildNodeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
