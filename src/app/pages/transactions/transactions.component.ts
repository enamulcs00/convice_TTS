import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ConvserviceService } from "src/app/convservice.service";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"],
})
export class TransactionsComponent implements OnInit {

  userdata: any;
  pageindec: any;
  pageCount: any;
  itemCount: any;
  

  constructor(private router: Router, private Srvc: ConvserviceService) {
    if (!localStorage.getItem("token")) this.router.navigate(["/login"]);
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  // Transaction Listing
  getAllUsers() {
    var page = this.pageindec == null ? "1" : this.pageindec;

    this.Srvc.getTransactions(page).subscribe((res: any) => {
      this.userdata = res.data.data;
      this.pageCount = res.data.itemCount;
    });
  }

  // Pagination
  onPaginateChange(event) {
  
    if (event.pageIndex === 0) {
      this.pageindec = 1;
    } else {
      this.pageindec = event.pageIndex + 1;
    }

    this.getAllUsers();
  }
}
