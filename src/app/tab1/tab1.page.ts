import { iFilme } from './../models/iFilme.moldel';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';

  listaVideos: iFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'

    },

    {
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: ' 18/03/2021',
      duracao: '4h 2m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia', 'Ficção científica'],
      pagina: '/liga-justica'

    },


    {
      nome: 'Rogai por Nós (2021)',
      lancamento: ' 20/05/2021',
      duracao: '1h 40m',
      classificacao: 71,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zduyzcjyahZtP4fGZE6789h04IM.jpg',
      generos: ['Ação', 'Aventura'],
      pagina: '/rogaipor-nos'

    },

    {
      nome: 'The Virtuoso (2021)',
      lancamento: ' 30/04/2021',
      duracao: '1h 45m',
      classificacao: 63,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg',
      generos: ['Ação', 'Crime'],
      pagina: '/the-virtuoso'

     },

  {
    nome: 'Raya - O último dragão (2021)',
    lancamento: ' 04/03/2021',
    duracao: '1h 47m',
    classificacao: 82,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o2NTWpD6LVf1YyPKTdvcEuHqcJ6.jpg',
    generos: ['Animação', 'Fantasia'],
    pagina: '/raya'

  }

  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }


  exibirFilme(filme: iFilme) {

    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }


  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({

      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
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
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
