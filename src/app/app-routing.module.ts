import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BayhomeComponent } from './bayhome/bayhome.component';
import { ToolcatagoryComponent } from './toolcatagory/toolcatagory.component';

const routes: Routes = [
  { path: '', component: BayhomeComponent },
  { path: 'toolcategory', component: ToolcatagoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }