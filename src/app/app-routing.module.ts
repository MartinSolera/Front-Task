import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { GeneratePDFComponent } from './components/generate-pdf/generate-pdf.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { RegisterTaskComponent } from './components/register-task/register-task.component';


const routes: Routes = [
  {path : "task", component:ListTaskComponent},
  {path : '',redirectTo:'task',pathMatch:'full'},
  {path : 'register-task',component : RegisterTaskComponent}, 
  {path : 'delete-task',component : DeleteTaskComponent},
  {path : 'pdf',component : GeneratePDFComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
