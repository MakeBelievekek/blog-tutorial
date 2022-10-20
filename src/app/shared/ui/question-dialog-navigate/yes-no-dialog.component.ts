import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IYesNoData} from "../../models/yes-no-data.model";

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IYesNoData, public dialogRef: MatDialogRef<YesNoDialogComponent>) {
  }

  ngOnInit(): void {
  }
}
