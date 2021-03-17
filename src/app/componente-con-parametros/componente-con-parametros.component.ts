import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-con-parametros',
  templateUrl: './componente-con-parametros.component.html',
  styleUrls: ['./componente-con-parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  constructor() {}

  miVariable = 100;
  
  ngOnInit(): void {}

}
