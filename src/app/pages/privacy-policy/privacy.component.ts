import { Component, OnInit } from '@angular/core';
import { ConvserviceService } from 'src/app/convservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements  OnInit {
  termscond: any;

  constructor(private Srvc:ConvserviceService) { }

  ngOnInit(): void {
    this.Srvc.getTerms().subscribe((res:any)=>
    {
      this.termscond = res.data.find(i => i.key == 'Privacy').value
     
    })
  }

  Savemodel()
  {
    const data ={"Privacy": this.termscond};
   this.Srvc.setCmscond(data).subscribe((res:any)=>
   {
     if(res.statusCode == 200)
     {
      Swal.fire('','Updated terms','success')
     }
   })
  }
}
