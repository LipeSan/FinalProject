import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ObradetalhePage } from '../obradetalhe/obradetalhe';

/*
  Generated class for the Obras page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-obras',
  templateUrl: 'obras.html'
})
export class ObrasPage {

  obras: Array<{name: any, imagem: string, total: GLfloat, conjuntos: any[]}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeObras();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObrasPage');
  }

  initializeObras(){
    this.obras = [
      {name: 'Obra casa praia', imagem: 'assets/img/obra_002.png', total: 3212.00,
      conjuntos:[
        {codigo: 1, nome: 'Conjunto de portas', descricao: 'pacote de pregos 3mm com 1000 pregos', estado: 'RS', unidade: 'UN', origemPreco: 'AB', preco: 13.43, quantidade: 12},
        {codigo: 2, nome: 'Conjunto de Janelas', descricao: 'contempla 3 janelas de 1,5x2 metros de madeira pino', estado: 'RS', unidade: 'UN', origemPreco: 'AB', preco: 321.43, quantidade:5}
      ]},
      {name: 'Obra casa cidade', imagem: 'assets/img/obra_001.png', total: 45122.00,
      conjuntos:[
        {codigo: 4, nome: 'Conjunto de Laminado', descricao: 'Laminado na cor branca 60x20 mm', estado: 'RS', unidade: 'M²', origemPreco: 'AB', preco: 15.43, quantidade: 30}
      ]}
    ];
  }

  openObraDetalhePage(obra){
    this.navCtrl.push(ObradetalhePage, {obra});
  }

}
