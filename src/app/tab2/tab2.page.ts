import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IListaSeries, ISerieApi } from '../models/iSerieAPI.model';
import { DadossService } from '../services/dadoss.service';
import { SerieService } from '../services/serie.service';
import { GeneroserieService } from '../services/generoserie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  titulo = 'Séries';

  
  listaSeries: IListaSeries;
  generos: string[] = [];
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadossService: DadossService,
    public serieService: SerieService,
    public generoserieService: GeneroserieService,
    public route: Router) { }

  buscarSeries(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;

    if (busca && busca.trim() !== '') {

      this.serieService.buscarSeries(busca).subscribe(dados => {
        console.log(dados);
        this.listaSeries = dados;
      });
    }
  }

  exibirSerie(serie: ISerieApi) {

    this.dadossService.guardarDados('serie', serie);
    this.route.navigateByUrl('/dados-serie');
  }


  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({

      header: 'Alerta!',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  ngOnInit(){
    this.generoserieService.buscarGeneros().subscribe(dados =>{

      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;

      });
      this.dadossService.guardarDados('generos', this.generos);
    });
  }
}
