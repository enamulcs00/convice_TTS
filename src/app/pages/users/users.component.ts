import { Component, OnInit } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { ConvserviceService } from "src/app/convservice.service";
import { de } from "date-fns/locale";
import Swal from "sweetalert2";
import { saveAs } from "file-saver";
import { validateEvents } from "angular-calendar/modules/common/util";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  closeResult: string;
  addUsers: FormGroup;
  Editprofile: FormGroup;
  userdata: any;
  userid: any;
  searchitem: any;
  checked: any;
  submitted: boolean;
  pageindec: any;
  isActive: any;
  pagecount: any;
  editdata: any;
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private formBuilder: FormBuilder,
    private Srvc: ConvserviceService
  ) {
    if (!localStorage.getItem("token")) this.router.navigate(["/login"]);
    this.addUsers = formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      // phoneNo:['',Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(5)])],
      email: ["", [Validators.required, Validators.email]],
      gender: ["", Validators.required],
    });

    this.Editprofile = formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      //  profilePic:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  // This is for the first modal
  open1(content1) {
    this.modalService
      .open(content1, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  openWindowCustomClass(content3) {
    this.modalService.open(content3, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }
  userprofileModal(userDelete) {
    this.modalService.open(userDelete, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }
  userDeleteModal(userDelete, id) {
    this.userid = id;
    this.modalService.open(userDelete, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "sm",
    });
  }
  userDetailModal(userDetail, id) {
    this.userid = id;
    debugger;
    this.editdata = this.userdata.filter((ele) => ele._id == id);
    this.Editprofile.controls["firstName"].setValue(this.editdata[0].firstName);
    this.Editprofile.controls["lastName"].setValue(this.editdata[0].lastName);
    this.Editprofile.controls["email"].setValue(this.editdata[0].email);
    this.modalService.open(userDetail, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }
  addUserModal(addUser) {
    this.submitted = false;
    this.modalService.open(addUser, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  getAllUsers() {
    const data = {
      page: this.pageindec == null ? "1" : this.pageindec,
      search: this.searchitem,
      isBlocked:
        this.isActive == "true"
          ? 'true'
          : this.isActive == "false"
          ? 'false'
          : "all",
    };
    this.Srvc.Allusers(data).subscribe((res: any) => {
      this.userdata = res.data != null ? res.data.users : [];
      this.pagecount = res.data.itemCount;
    });
  }

  onPaginateChange(event) {
    console.log(event);
    if (event.pageIndex === 0) {
      this.pageindec = 1;
    } else {
      this.pageindec = event.pageIndex + 1;
    }
    this.getAllUsers();
  }

  modalyes() {
    debugger;
    this.Srvc.DeleteUsers(this.userid).subscribe((res: any) => {
      if (res.statusCode == 200) {
        Swal.fire("", res.message, "success");
        this.modalService.dismissAll();
        this.getAllUsers();
      }
    });
  }

  modalUpdated() {
    this.submitted = true;
    const data = {
      firstName: this.Editprofile.controls["firstName"].value,
      lastName: this.Editprofile.controls["lastName"].value,
      email: this.Editprofile.controls["email"].value,
    };

    this.Srvc.EditUsers(this.userid, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        Swal.fire("", res.message, "success");
        this.modalService.dismissAll();
        this.getAllUsers();
      }
    });
  }

  onChange(event, id) {
    this.checked = event.checked;
    this.Srvc.changeStatus(id).subscribe((res: any) => {
      console.log("res");
    });
  }

  Saveformate() {
    saveAs(
      "https://api.convoiceapp.com/api/v1/admin/export/users.csv",
      "users.csv"
    );
  }

  addUserdata() {
    this.submitted = true;
    if (!this.addUsers.invalid) {
      debugger;
      const data = {
        firstName: this.addUsers.controls["firstName"].value,
        lastName: this.addUsers.controls["lastName"].value,
        email: this.addUsers.controls["email"].value,
        gender: this.addUsers.controls["gender"].value,
      };
      this.Srvc.addUser(data).subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.getAllUsers();
          Swal.fire("", res.message, "success");
          this.modalService.dismissAll();
        } else {
          Swal.fire("", res.message, "error");
        }
      });
    }
  }

  public errorHandlingRevocer = (control: string, error: string) => {
    return this.addUsers.controls[control].hasError(error);
  };

  public errorHandlingProfile = (control: string, error: string) => {
    return this.Editprofile.controls[control].hasError(error);
  };

  getItem(event) {
    console.log(event.target.value);
    // this.searchitem = event.target.value
    this.getAllUsers();
  }

  someMethod(event) {
    this.isActive = event.target.value;
    this.getAllUsers();
  }
}
