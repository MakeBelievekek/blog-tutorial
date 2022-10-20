import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  open = false;

  constructor(private router: Router,) {
  }

  ngOnInit(): void {
  }

  onOpen(): void {
    this.open = true;
  }

  onClose(): void {
    this.open = false;
  }

  onLogin() {
    this.router.navigate(['../login']).then(_ => this.onClose());
  }

  onRegistration() {
    this.router.navigate(['../register']).then(_ => this.onClose());
  }
}
