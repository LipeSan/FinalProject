import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

      this.data = {};
      this.data.username = "";
      this.data.password = "";

  }

  login(): void{
    let username = this.data.username;
    let password = this.data.password;
    let data = JSON.stringify(username, password);
    let link = "http://localhost/testeLogin/api/securelogin.php";

    this.http.post(link, data)
    .subscribe(data =>{
      console.log("success")
    }, error => {
      console.log("error man")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
