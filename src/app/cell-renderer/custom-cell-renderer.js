import { Component } from '@angular/core';
import { ICellRendererParams } from "@ag-grid-community/core";
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
@Component({
  selector: 'custom-cell-renderer',
  template: `<button (click)="buttonClicked()">Launch!</button>`
})
export class CustomCellRendererComponent {
    params = any;
  
   agInit(params) {
    this.params = params;
   }
    buttonClicked() {
      alert("Software Launched");
    }
}
