import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<WarningComponent>) { }

  ngOnInit() {
  }
  closeBallot(){
    
    this.dialogRef.close();
  }
  logOut(){
    this.dialogRef.close();
  }
}
