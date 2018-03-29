import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxElectronModule } from 'ngx-electron';
import { NgxFsModule } from 'ngx-fs';
import { CodemirrorModule } from 'ng2-codemirror';
import { AppComponent } from './app.component';
// import * as GoldenLayout from 'golden-layout';
// import {
//   GoldenLayoutModule,
//   GoldenLayoutConfiguration,
//   DEFAULT_LOCAL_STORAGE_STATE_STORE_PROVIDER
// } from '@goldsam/ng-golden-layout';
import { PanelPropetiesComponent } from './panel-propeties/panel-propeties.component';
import { PanelPreviewComponent } from './panel-preview/panel-preview.component';
import { EditorCodeComponent } from './editor-code/editor-code.component';

// const goldenLayoutConfig: GoldenLayoutConfiguration = {
//   components: [
//     {
//       component: AppComponent,
//       componentName: 'test-panel'
//     }
//   ],
//   defaultLayout: {
//     content: [{
//     type: 'row',
//     content: [{
//       type: 'component',
//       title: 'A',
//       componentName: 'test-panel',
//       componentState: { label: 'A' }
//     }, {
//       type: 'stack',
//       content: [{
//         type: 'component',
//         title: 'B',
//         componentName: 'test-panel',
//         componentState: { label: 'B' }
//       }, {
//         type: 'component',
//         title: 'C',
//         componentName: 'test-panel',
//         componentState: { label: 'C' }
//       }]
//     }]
//   }]
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    PanelPropetiesComponent,
    PanelPreviewComponent,
    EditorCodeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    // GoldenLayoutModule.forRoot(goldenLayoutConfig),
    NgxElectronModule,
    CodemirrorModule,
    NgxFsModule
  ],
  entryComponents: [
    EditorCodeComponent,
    PanelPreviewComponent,
    PanelPropetiesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
