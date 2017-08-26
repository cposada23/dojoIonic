import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubProvider {

  apiLink:any = "https://api.github.com/users/"

  constructor(public http: Http) {}

  buscarUsuario(usuario:string){
      return new Promise((resolve, reject)=> {
        // https://api.github.com/users/cposada23?client_id=4ff9389562a964f7c898&client_secret=40c680627f6449863f9fd448acc4e7f0e3fb72ff
        var link:string = this.apiLink + usuario + '?client_id=4ff9389562a964f7c898&client_secret=40c680627f6449863f9fd448acc4e7f0e3fb72ff'
        this.http.get(link).map(res=>res.json()).subscribe(
          (data) => {
            resolve(data)
          },
          (error) => {
            reject("Error: "+ error)
          })
  })}

  cargarRepos(usuario:string){
    return new Promise((resolve, reject)=> {
      var link:string = this.apiLink + usuario + "/repos"
      this.http.get(link).map(res=>res.json()).subscribe(
        (data) => {
          resolve(data)
        },
        (error) => {
            reject("Error: "+ error)
        })
  })}

  c() {
    console.log("hola");
  }

}
