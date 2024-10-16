import {inject, Injectable} from '@angular/core';
import {LoadingController, ToastController, ToastOptions} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtl = inject(LoadingController)
  toastCtl = inject(ToastController)

  loading(){
    return this.loadingCtl.create({spinner: 'crescent'})
  }

  async presentToast(opts?: ToastOptions){
    const toast = await this.toastCtl.create(opts);
    return toast.present();
  }






}
