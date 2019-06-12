import { NgModule } from '@angular/core';

// import modules wat jy wil gebruik in jou site
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatCardModule,
            MatToolbarModule,
            MatIconModule],
  exports: [MatButtonModule,
            MatCheckboxModule,
            MatCardModule,
            MatToolbarModule,
            MatIconModule],
})
export class MaterialModule { }
