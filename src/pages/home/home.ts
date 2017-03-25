import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastrarPage } from '../cadastrar/cadastrar';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [
    {
      title: "Bem-vindos ao OrçaObra!",
      description: "O <b>OrçaObra</b> é um aplicativo acadêmico",
      image: "assets/img/design_001.png",
    },
    {
      title: "O que é o OrçaObra?",
      description: "<b>OrçaObra</b> é um aplicativo que tem como objetivos auxiliar os alunos do curso de Engenharia Civil ou pessoas do ramo para agilizar o processo de orçamento de obras!",
      image: "assets/img/design_002.png",
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  openCadastrarPage(){
    this.navCtrl.push(CadastrarPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
