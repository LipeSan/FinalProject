import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomeLogadaPage } from '../homelogada/homelogada';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  urlBase: string = 'http://api.dev/api/v1/authorize'
  public user = {
        email: '',
        password: ''
      };


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController, public auth: Auth) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let credentials = { email: this.user.email, password: this.user.password }

    if(credentials.email != "" && credentials.password != "") {
      let loader = this.showLoading(null, 'Aguarde um estante...')


      return this.http.post(this.urlBase, credentials)
        .toPromise()
        .then((response) => {
          loader.dismiss()
          let data = response.json().result
          localStorage.setItem('token', data.access_token)
          this.navCtrl.setRoot(HomeLogadaPage, {
            user: data
          })
        }, (error) => {
          loader.dismiss()
          this.alert('Error', null, 'Não foi possível efetuar o login')
        })
    } else {
      this.alert('Error', null, 'Por favor preencha todos os campos')
    }
  }


  showLoading(duration, content) {
    let loader = this.loadingCtrl.create({
      content: content,
      duration: duration
    });

    loader.present()

    return loader
  }

  alert(title, subTitle, message) {
    let alert = this.alertCtrl.create({
        title: title,
        subTitle: subTitle,
        message: message,
        buttons: ['fechar']
    })
    alert.present();
  }

}
