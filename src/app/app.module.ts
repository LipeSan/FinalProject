import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { HomeLogadaPage } from '../pages/homelogada/homelogada';
import { MeusDadosPage } from '../pages/meusdados/meusdados';
import { ObrasPage } from '../pages/obras/obras';
import { ConjuntosPage } from '../pages/conjuntos/conjuntos';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { ConjuntodetalhePage } from '../pages/conjuntodetalhe/conjuntodetalhe';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    HomeLogadaPage,
    MeusDadosPage,
    ObrasPage,
    ConjuntosPage,
    CadastrarPage,
    ConjuntodetalhePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    HomeLogadaPage,
    MeusDadosPage,
    ObrasPage,
    ConjuntosPage,
    CadastrarPage,
    ConjuntodetalhePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
