import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {CustomPipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomPipesModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    CustomPipesModule
  ]
})
export class SharedModule {

}
