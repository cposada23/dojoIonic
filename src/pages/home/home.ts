import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario: string;
  encontrado = false;
  datos: any;
  constructor(public gitHub:GithubProvider, public navCtrl: NavController) {

  }

  buscar() {
    this.gitHub.buscarUsuario(this.usuario).then((user) => {
      console.log(user);
      this.encontrado = true;
      this.datos = user;
    }).catch(error => {
      console.error(error);
      this.encontrado = false;
    });
  }

}
