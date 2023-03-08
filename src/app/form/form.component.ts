import {Component, OnInit} from '@angular/core';
import {AgentD} from "../agent-d";
import {Implement} from "@angular/cli/lib/config/workspace-schema";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  constructor(private authService:AuthService) {

  }
  agent:AgentD = new AgentD();

  SaveAgent(){
    console.log(this.agent);
    this.authService.NewAgent(this.agent).subscribe(data=>{
      alert("Success")
      },error => alert("Not Success")
    )}

  ngOnInit(): void {
  }
}
