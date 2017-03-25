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
import { ObradetalhePage } from '../pages/obradetalhe/obradetalhe';

import { ConnectionService } from '../providers/connection-service';
import { Auth } from '../providers/auth';

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
    ConjuntodetalhePage,
    ObradetalhePage
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
    ConjuntodetalhePage,
    ObradetalhePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Auth]
})
export class AppModule {}
