import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { HomeLogadaPage } from '../pages/homelogada/homelogada';
import { MeusDadosPage } from '../pages/meusdados/meusdados';
import { ObrasPage } from '../pages/obras/obras';
import { ConjuntosPage } from '../pages/conjuntos/conjuntos';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';

import { Auth } from '../providers/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

//rootPage: any = HomePage;
rootPage: any = HomePage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public auth: Auth) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomeLogadaPage, icon: 'home' },
      { title: 'Meus Dados', component: MeusDadosPage, icon: 'person' },
      { title: 'Minhas Obras', component: ObrasPage, icon: 'construct' },
      { title: 'Conjuntos', component: ConjuntosPage, icon: 'folder' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    
  }

}
