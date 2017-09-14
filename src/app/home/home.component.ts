import { Component, OnInit } from '@angular/core';
import { Http,Response,ResponseOptionsArgs,Headers} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info:any;
  info_only:any;
  constructor(private http:Http) {
    this.getData();
    

   }

  ngOnInit() {
  }
  getData(){
    this.http.get('https://api.nongtoum.club/Api/Values').subscribe((res)=>{
      this.info = res.json();
      console.log(this.info);
    });
    

  }
  getDataid(Id){
    this.http.get('https://api.nongtoum.club/Api/Values?id='+Id).subscribe((res)=>{
    this.info_only = res.json();
    console.log(this.info_only);
    });
    

  }
  Ondelete(Id){
    this.http.delete('https://api.nongtoum.club/Api/Values?id='+Id).subscribe((res)=>{
      this.getData();
    });
  }
  Add(valueTitle,valueBody,valueStatus){
    var obj = {
      valueTitle:valueTitle,
      valueBody:valueBody,
      valueStatus:valueStatus
    }
    console.log(obj);
    this.http.post('https://api.nongtoum.club/Api/Values',obj).subscribe((res)=>(this.getData()))
  }
  Onedit(Id,valueTitle,valueBody,valueStatus){
    var obj = {
      valueTitle:valueTitle,
      valueBody:valueBody,
      valueStatus:valueStatus
    }
   
    this.http.put('https://api.nongtoum.club/Api/Values?Id='+Id,obj).subscribe((res)=>{
    this.info_only =res.json();
    console.log(this.info_only);
    this.getData();
    });
  }

}
