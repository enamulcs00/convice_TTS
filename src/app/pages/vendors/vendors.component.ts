import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConvserviceService } from 'src/app/convservice.service';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  closeResult: string;
  addUsers:FormGroup;
  Editprofile:FormGroup;
  userdata: any;
  userid: any;
  searchitem:any;
  checked: any;
  submitted: boolean;
  pageindec: any;
  isActive: any;
  pagecount: any;
  editdata: any;
  userId: any;
  feature:string[]=[]
  featureEdit:string[]=[]
  constructor(private modalService: NgbModal,private router:Router ,private formBuilder: FormBuilder,private Srvc:ConvserviceService) 
  {
    if(!localStorage.getItem('token'))this.router.navigate(['/login'])
     this.addUsers = formBuilder.group
     ({
      
      package:['', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
      price:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
     // phoneNo:['',Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(5)])],
      expiryDays:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      charLimit:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      purchaseId:['',[Validators.required]],
      
      billingType:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],

      

     })

     this.Editprofile = formBuilder.group
     ({
      package:['', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
      price:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
     // phoneNo:['',Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(5)])],
      expiryDays:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      charLimit:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      purchaseId:['',[Validators.required]],
      
      billingType:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
     })
  }

  ngOnInit(): void {
this.getAllUsers()

  }
// This is for the first modal
open1(content1) {
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
openWindowCustomClass(content3) {
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userprofileModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDeleteModal(userDelete,id) {
  this.userid = id
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}

userDetailModal(userDetail,obj) {
  this.userid = obj._id
  this.featureEdit = obj.features
  this.Editprofile.patchValue({
package:obj.name,
price:obj.price,
expiryDays:obj.expiryDays,
charLimit:obj.charLimit,
purchaseId:obj.purchaseId,

billingType:obj.billingType,
  })
  
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
addUserModal(addUser) {
  this.submitted = false;
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

getAllUsers()
{
  this.Srvc.getPackage().subscribe((res:any)=>
  
  {
    console.log('This is data pack',res)
    this.userdata = res.data
    this.pagecount = res.data.length
  })
}

modalyes()
{
 
  this.Srvc.DeletePackage(this.userid).subscribe((res:any)=>
 {
   if(res.statusCode == 200)
   {
     Swal.fire('',res.message,'success')
     this.modalService.dismissAll();
     this.getAllUsers()
   }
 }
  )
}

modalUpdated()

{
  console.log('upade');
  this.submitted = true;
  const data =
  {
    
    "name":this.Editprofile.controls['package'].value,
      "price":this.Editprofile.controls['price'].value+"",
      "features":this.featureEdit,
      "expiryDays":this.Editprofile.controls['expiryDays'].value,
      "charLimit":this.Editprofile.controls['charLimit'].value,
      "billingType":this.Editprofile.controls['billingType'].value,
      "purchaseId":this.Editprofile.controls['purchaseId'].value
  }

  this.Srvc.EditPackage(this.userid,data).subscribe((res:any)=>
  {
    if(res.statusCode == 200)
    {
      Swal.fire('',res.message,'success')
      this.modalService.dismissAll();
      this.getAllUsers()
    }
    else{
      Swal.fire('',res.message,'error')
    }
  })
}

onChange(event,id)
{
  this.checked = event.checked;
  this.Srvc.changeStatus(id).subscribe((res:any)=>
  {
    console.log('res');
  })
}

Saveformate()
{
  saveAs("https://api.convoiceapp.com/api/v1/admin/export/users.csv", "users.csv");
}

addUserdata()
{
  this.submitted = true;
  if(!this.addUsers.invalid)
  { 
    const data=
    {
      "name":this.addUsers.controls['package'].value,
      "price":this.addUsers.controls['price'].value+"",
      "features":this.feature,
      "expiryDays":this.addUsers.controls['expiryDays'].value,
      "charLimit":this.addUsers.controls['charLimit'].value,
      "billingType":this.addUsers.controls['billingType'].value,
      "purchaseId":this.addUsers.controls['purchaseId'].value
    }
    this.Srvc.addPackage(data).subscribe((res:any)=>
    {
      if(res.statusCode == 200)
      {
        this.getAllUsers()
        Swal.fire('',res.message,'success');
        this.modalService.dismissAll()
        this.addUsers.reset()
      }
      else{
        Swal.fire('',res.message,'error')
      }
    })
  }

}

public errorHandlingRevocer = (control: string, error: string) => {
  return this.addUsers.controls[control].hasError(error);
}

public errorHandlingProfile = (control: string, error: string) => {
  return this.Editprofile.controls[control].hasError(error);
}

onPaginateChange(event)
{
  console.log(event)
  this.pageindec = event.pageIndex
  this.getAllUsers()
}

getItem(event)
{
  console.log(event.target.value)
  // this.searchitem = event.target.value
  this.getAllUsers()
}

someMethod(event)
{
  this.isActive =event.target.value;
  this.getAllUsers()
}
features(e,item){
  console.log('This is checked items',e.target.checked)
if(e.target.checked==true){
  this.feature.push(item)
  console.log('Check true',this.feature)
}
else if(e.target.checked==false){
  this.feature.splice(this.feature.indexOf(item), 1);
  console.log('Unchecked',this.feature)
  }

}
featuresEdit(e,item){
  console.log('This is checked items',e.target.checked)
if(e.target.checked==true){
  this.featureEdit.push(item)
  console.log('Check true',this.feature)
}
else if(e.target.checked==false){
  this.featureEdit.splice(this.featureEdit.indexOf(item), 1);
  console.log('Unchecked',this.feature)
  }
}
}
