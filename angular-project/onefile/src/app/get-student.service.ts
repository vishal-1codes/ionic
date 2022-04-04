import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetStudentService {

  picService:any;

  gsage:any=22;
  geage:any=26;

  //defied here 
  testdata:any;

  constructor(private http:HttpClient) {
    
  }

  

  getStudents(){
    return this.http.get('http://localhost:3000/api/student'); 
    }

  getUserByAge(){

    const url="http://localhost:3000/api/student/showuser"
    let queryParms=new HttpParams();
    let sage=22
    //use here 
    let eage=this.testdata
    console.log("get data from compoennt",eage);
    
    // queryParms=queryParms.append("sage",22)
    // queryParms=queryParms.append("eage",26)
    // return this.http.get(url,{params:queryParms})
    // let queryParms=new HttpParams.append("sage",23,"eage",26)

    //we can pass parameters as using + sing but "/" is imp
    return this.http.get(url+"/"+sage+"/"+eage)

  }


  getDataById(){
    const url="http://localhost:3000/api/student/showById"

    return this.http.get(url+"/"+"62357f5a433ed85707f476a4")
  }




  


}
