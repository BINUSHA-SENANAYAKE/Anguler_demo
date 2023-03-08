import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AgentD} from "../agent-d";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL=""
  constructor(private httpClient: HttpClient ) {}

  NewAgent(agent: AgentD):Observable<object>{
    console.log(agent);
    return this.httpClient.post(`http://localhost:8080/api/v1/user/saveUser`,agent);
  }
}
