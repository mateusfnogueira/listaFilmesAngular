import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'dio-topo',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class TopoComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  constructor() {}

  ngOnInit() {}

  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav() {
    this.sidenav.close();
  }
}
