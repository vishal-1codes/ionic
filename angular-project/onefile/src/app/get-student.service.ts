import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetStudentService {

  picService:any;

  constructor(private http:HttpClient) {
    
  }

  

  getStudents(){
    return this.http.get('http://localhost:3000/api/student'); 
    }

  getUserByAge(){

    const url="http://localhost:3000/api/student/showuser"
    let queryParms=new HttpParams();
    queryParms=queryParms.append("sage",22)
    queryParms=queryParms.append("eage",26)
    return this.http.get(url,{params:queryParms})
    // let queryParms=new HttpParams.append("sage",23,"eage",26)

  }

  


}
