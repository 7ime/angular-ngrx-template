import {NgModule} from "@angular/core";
import {TestSceneComponent} from "./test-scene.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {TestApiSceneComponent} from "./test-api-scene/test-api-scene.component";
import {PostsComponent} from "../../containers/posts/posts.component";
import {PostListComponent} from "../../presentational/post-list/post-list.component";

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
    TestApiSceneComponent,
    PostsComponent,
    PostListComponent
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
