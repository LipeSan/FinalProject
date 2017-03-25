import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the Cadastrar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {
  urlBase: string = 'http://api.dev/api/v1/users';
  public user = {
    name: '',
    email: '',
    password:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }

  register() {
    let credentials = { name: this.user.name, email: this.user.email, password: this.user.password }

    if(credentials.name != ""&& credentials.email != "" && credentials.password != "") {
      let loader = this.showLoading(null, 'Aguarde um estante...')

      return this.http.post(this.urlBase, credentials)
        .toPromise()
        .then((response) => {
          loader.dismiss()
          let data = response.json().result
          this.alert('Parabéns', null, 'Cadastro efetuado com Sucesso');
          this.navCtrl.setRoot(LoginPage)
        }, (error) => {
          loader.dismiss()
          this.alert('Error', null, 'Não foi possível efetuar o registro')
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
