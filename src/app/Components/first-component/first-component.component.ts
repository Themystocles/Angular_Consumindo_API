import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  nome = "Matheus"
  dados = {
    email: 'teste@outlook.com',
    cpf: "oi"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
