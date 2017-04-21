import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }
  
  private data: [{id:string,name:string,email:string}]  = [
    {id:'1',name:'Sonam',email:'sonam@gmail.com'},
    {id:'2',name:'Raju',email:'raju@gmail.com'}
  ];

  getData(){
    return this.data;
  }

  getDataById(id:string){

    let student = this.data.filter((s)=>s.id==id);
    return student[0];
  }

}
