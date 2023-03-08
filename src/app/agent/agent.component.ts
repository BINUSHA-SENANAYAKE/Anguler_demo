import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit{

  agent:any
constructor(private http:HttpClient , private route:Router) {}

  ngOnInit(): void {
  let response = this.http.get("http://localhost:8080/api/v1/user/getUser");
  response.subscribe((data) =>this.agent=data);
  }

  onEdit(agent: any){

  }
  addAgent(){
    this.route.navigate(['A_form']);
  }

}
