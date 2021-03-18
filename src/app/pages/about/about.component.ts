import { Component, OnInit } from '@angular/core';
import  { ConvserviceService } from 'src/app/convservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements  OnInit {
  termscond:any;
  termsdata: any;
  constructor(private Srvc:ConvserviceService) { }

  ngOnInit(): void {
    this.Srvc.getTerms().subscribe((res:any)=>
    {
     // this.termscond = res.data[1].value
      this.termscond = res.data.find(i => i.key == 'Terms').value
    })
  }

  Savemodel()
  {
    const data ={"Terms": this.termscond};
   this.Srvc.setCmscond(data).subscribe((res:any)=>
   {
     if(res.statusCode == 200)
     {
      Swal.fire('','Updated terms','success')
     }
   })
  }
}
