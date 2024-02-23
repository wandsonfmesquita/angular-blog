import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  @Input()
  photoCover:string ="https://image.freepik.com/fotos-gratis/cinco-pirulitos-coloridos_23-2147689677.jpg"
  @Input()
  cardTitle:string= ""

  constructor() {}

  ngOnInit(): void {

  }

}
