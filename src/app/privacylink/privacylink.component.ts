import { Component, OnInit } from '@angular/core';
import { ConvserviceService } from '../convservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-privacylink',
  templateUrl: './privacylink.component.html',
  styleUrls: ['./privacylink.component.css']
})
export class PrivacylinkComponent implements OnInit {
  termscond: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>(`https://api.convoiceapp.com/api/v1/admin/getSettings`).subscribe((res:any)=>
    {
      console.log(res)
      this.termscond = res.data.find(i => i.key == 'Privacy').value
     
    })
  }

}
