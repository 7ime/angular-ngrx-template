import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeSceneComponent} from "./scenes/home-scene/home-scene.component";


const routes: Routes = [
  {
    path: '',
    component: HomeSceneComponent
  },
  {
    path: 'test',
    loadChildren: () => import('./scenes/test-scene/test-scene.module').then(m => m.TestSceneModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
