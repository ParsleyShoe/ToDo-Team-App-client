import { Component, OnInit } from '@angular/core';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public systemsvc:SystemService
  ) { }

  ngOnInit(): void {
  }

}
