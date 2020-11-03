import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class footerComponent implements OnInit {

  public persona : any = { nombre : 'juan', apellido : 'Paz'}

  constructor() { }

  ngOnInit(): void {
  }

}
