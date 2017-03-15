import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Conjuntodetalhe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-conjuntodetalhe',
  templateUrl: 'conjuntodetalhe.html'
})
export class ConjuntodetalhePage {
itemConjunto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemConjunto = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConjuntodetalhePage');
  }

}
