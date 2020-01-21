import {NgModule} from "@angular/core";
import {TestSceneComponent} from "./test-scene.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {TestApiSceneComponent} from "./test-api-scene/test-api-scene.component";

const routes: Routes = [
  {
    path: '',
    component: TestSceneComponent,
    children: [
      {
        path: 'api',
        component: TestApiSceneComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    TestSceneComponent,
    TestApiSceneComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestSceneModule {

}
