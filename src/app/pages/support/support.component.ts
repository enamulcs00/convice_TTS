import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import  { ConvserviceService } from 'src/app/convservice.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  termscond: any;

  constructor(private Srvc:ConvserviceService) { }

  ngOnInit(): void {
    this.Srvc.getTerms().subscribe((res:any)=>
    {
      this.termscond = res.data.find(i => i.key == 'AboutUs').value
    })
  }

  Savemodel()
  {
    const data ={"AboutUs": this.termscond};
   this.Srvc.setCmscond(data).subscribe((res:any)=>
   {
     if(res.statusCode == 200)
     {
      Swal.fire('','Updated terms','success')
     }
   })
  }
}
