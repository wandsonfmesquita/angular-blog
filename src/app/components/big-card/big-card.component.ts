import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  @Input()
  photoCover:string ="https://image.freepik.com/fotos-gratis/cinco-pirulitos-coloridos_23-2147689677.jpg"
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string= ""
  @Input()
  Id:string="0"

  constructor() {}

  ngOnInit(): void {

  }

}
