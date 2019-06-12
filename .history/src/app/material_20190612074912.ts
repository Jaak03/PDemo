import { NgModule } from '@angular/core';

// import modules wat jy wil gebruik in jou site
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule],
  exports: [MatButtonModule,
            MatCheckboxModule],
})
export class MaterialModule { }
