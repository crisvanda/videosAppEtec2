import { Component, OnInit } from '@angular/core';
import { ISerieApi } from '../models/iSerieAPI.model';
import { DadossService } from '../services/dadoss.service';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

    serie: ISerieApi;

  generos: string[] = [];

  constructor(public dadossService: DadossService) { }

  ngOnInit() {
    this.serie = this.dadossService.pegarDados('serie');
    this.generos = this.dadossService.pegarDados('generos');
    console.log('Serie enviada', this.serie);

  }

}




