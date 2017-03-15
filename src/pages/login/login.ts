import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
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
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

      this.data = {};
      this.data.username = "";
      this.data.password = "";

  }

  login(): void{
    let username = this.data.username;
    let password = this.data.password;
    let data = JSON.stringify({username, password});
    let link = "http://localhost/testeLogin/api/securelogin.php";

    this.http.post(link, data)
    .subscribe(data =>{
      this.presentLoading();
      console.log("success")
    }, error => {
      this.showAlert();
      console.log("error man")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //Metodo de Alerta referete a falha de Login
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: 'Infelizmente as credencias informadas são invalidas!',
      buttons: ['OK']
    });
    alert.present();
  }

  //Metodo que exibe o popup de aguarde para validar as credenciais de login
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Por Favor, aguarde...",
      duration: 3000
    });
    loader.present();
  }


}
