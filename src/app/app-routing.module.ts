import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {DetailsComponent} from "./details/details.component";
import {AgentComponent} from "./agent/agent.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {EFormComponent} from "./e-form/e-form.component";


const routes: Routes = [
  { path:'', redirectTo:'A_agent',pathMatch:'full'},
  { path:'A_form',component:FormComponent},
  { path:'A_agent',component:AgentComponent},
  { path:'A_details',component:DetailsComponent},
  { path:'A_header',component:HeaderComponent},
  { path:'A_footer',component:FooterComponent},
  { path:'A_E_form',component:EFormComponent},
  { path:'**',component:AgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
