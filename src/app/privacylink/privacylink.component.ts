import { Component, OnInit } from '@angular/core';
import { ConvserviceService } from '../convservice.service';

@Component({
  selector: 'app-privacylink',
  templateUrl: './privacylink.component.html',
  styleUrls: ['./privacylink.component.css']
})
export class PrivacylinkComponent implements OnInit {
  termscond: any;

  constructor(private Srvc:ConvserviceService) { }

  ngOnInit() {
    // this.Srvc.getTerms().subscribe((res:any)=>
    // {
    //   console.log(res)
    //   this.termscond = res.data.find(i => i.key == 'Privacy').value
     
    // })
  }

}
