import { Component, OnInit } from '@angular/core';
import {OptInForm} from "../../forms/opt-in-form";

@Component({
  selector: 'app-opt-in-form',
  templateUrl: './opt-in-form.component.html',
  styleUrls: ['./opt-in-form.component.scss']
})
export class OptInFormComponent implements OnInit {

  constructor(public form: OptInForm) { }

  ngOnInit(): void {
  }

}
