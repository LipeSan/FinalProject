import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController} from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-homelogada',
  templateUrl: 'homelogada.html'
})
export class HomeLogadaPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {

  }

  openHome(){
    let modal = this.modalCtrl.create(HomeLogadaPage);
    modal.present();
  }

}
