import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConvserviceService } from '../convservice.service';

@Component({
  selector: 'app-supportlink',
  templateUrl: './supportlink.component.html',
  styleUrls: ['./supportlink.component.css']
})
export class SupportlinkComponent implements OnInit {
  termscond: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`https://api.convoiceapp.com/api/v1/admin/getSettings`).subscribe((res:any)=>
    {
      console.log(res)
      this.termscond = res.data.find(i => i.key == 'AboutUs').value
     
    })
  }
}
