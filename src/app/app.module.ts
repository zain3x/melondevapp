import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxElectronModule } from 'ngx-electron';
import { NgxFsModule } from 'ngx-fs';
import { CodemirrorModule } from 'ng2-codemirror';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    NgxElectronModule,
    CodemirrorModule,
    NgxFsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
