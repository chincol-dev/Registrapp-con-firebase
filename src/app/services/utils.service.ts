import {inject, Injectable} from '@angular/core';
import {LoadingController, ToastController, ToastOptions} from "@ionic/angular";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtl = inject(LoadingController)
  toastCtl = inject(ToastController)
  router = inject(Router)

  loading(){
    return this.loadingCtl.create({spinner: 'crescent'})
  }

  async presentToast(opts?: ToastOptions){
    const toast = await this.toastCtl.create(opts);
    return toast.present();
  }

  routerLink(url: string){
    return this.router.navigateByUrl(url);

  }


  saveInLocaleStorage(key: string, value:any ){
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocaleStorage(key: string){
    return JSON.parse(localStorage.getItem(key));
  }




}
