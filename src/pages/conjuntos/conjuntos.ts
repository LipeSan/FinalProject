import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConjuntodetalhePage } from '../conjuntodetalhe/conjuntodetalhe';

/*
  Generated class for the Conjuntos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-conjuntos',
  templateUrl: 'conjuntos.html',
})


export class ConjuntosPage {
  searchQuery: string = '';
  items: Array<{codigo: GLfloat, nome: any, descricao: string, estado: any, unidade: any, origemPreco: any, preco: GLfloat}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {codigo: 1, nome: 'Conjunto de portas', descricao: 'pacote de pregos 3mm com 1000 pregos', estado: 'RS', unidade: 'UN', origemPreco: 'AB', preco: 13.43},
      {codigo: 2, nome: 'Conjunto de Janelas', descricao: 'contempla 3 janelas de 1,5x2 metros de madeira pino', estado: 'RS', unidade: 'UN', origemPreco: 'AB', preco: 321.43},
      {codigo: 3, nome: 'Conjunto de piso porcelanato', descricao: 'Porcelanato de 60x60 mm', estado: 'RS', unidade: 'M²', origemPreco: 'AB', preco: 63.43},
      {codigo: 4, nome: 'Conjunto de Laminado', descricao: 'Laminado na cor branca 60x20 mm', estado: 'RS', unidade: 'M²', origemPreco: 'AB', preco: 15.43}
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openConjuntoDetalhePage(item){
    this.navCtrl.push(ConjuntodetalhePage, {item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConjuntosPage');
  }

}
