import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Obradetalhe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-obradetalhe',
  templateUrl: 'obradetalhe.html'
})
export class ObradetalhePage {
  itemObra: any;
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemObra = this.navParams.get('obra');
  }

  toggleGroup(group): void {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};

isGroupShown(group) : any {
    return this.shownGroup === group;
};

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObradetalhePage');
  }

}
