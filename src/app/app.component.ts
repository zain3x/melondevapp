import {
  Component, OnInit, Inject,
  AfterViewInit, ComponentFactoryResolver, HostListener, ComponentFactory, ComponentRef, ViewContainerRef, ReflectiveInjector,
  ElementRef, ViewChild
} from '@angular/core';

import 'codemirror/mode/javascript/javascript';
import { EditorCodeComponent } from './editor-code/editor-code.component';
import { PanelPreviewComponent } from './panel-preview/panel-preview.component';
import { PanelPropetiesComponent } from './panel-propeties/panel-propeties.component';
declare let GoldenLayout: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'Melon DevApp';
  private config: any;

  @ViewChild('layout') private layout: any;

  constructor(
    private el: ElementRef, private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.config = {
      content: [{
          type: 'row',
          content: [{
            type: 'component',
            componentName: 'code',
            componentState: {
              message: 'Top Left'
            }
          }, {
            type: 'column',
            content: [{
              type: 'component',
              componentName: 'properties',
              componentState: {
                message: 'Top Right'
            }
            }, {
              type: 'component',
              componentName: 'properties',
              componentState: {
                message: 'Bottom Right'
              }
            }]
          }]
      }]
    };
  }

  OnInit() {
  }

  /* Golden Layout */
  ngAfterViewInit() {
    this.layout = new GoldenLayout(this.config, this.layout.nativeElement);

    this.layout.registerComponent('code', (container, componentState) => {
      const factory = this.componentFactoryResolver.resolveComponentFactory(EditorCodeComponent);

      const compRef = this.viewContainer.createComponent(factory);
      // compRef.instance.setEventHub(this.layout.eventHub);
      // compRef.instance.message = componentState.message;
      container.getElement().append(compRef.location.nativeElement);

      container['compRef'] = compRef;

      // compRef.changeDetectorRef.detectChanges();
    });

    this.layout.registerComponent('properties', (container, componentState) => {
      const factory = this.componentFactoryResolver.resolveComponentFactory(PanelPropetiesComponent);

      // let compRef = this.viewContainer.createComponent(factory);
      // compRef.instance.setEventHub(this.layout.eventHub);
      // compRef.instance.message = componentState.message;
      // container.getElement().append(compRef.location.nativeElement);

      // container["compRef"] = compRef;

      // compRef.changeDetectorRef.detectChanges();
    });

    this.layout.init();

    // this.layout.on("itemDestroyed", item => {
    //   if (item.container != null) {
    //     let compRef = item.container["compRef"];
    //     if (compRef != null) {
    //       compRef.destroy();
    //     }
    //   }
    // });
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   if (this.layout) {
  //     this.layout.updateSize();
  //   }
  // }

  // sendEvent() {
  //   if (this.layout) {
  //     this.layout.eventHub.emit('someEvent');
  //   }
  // }

}
