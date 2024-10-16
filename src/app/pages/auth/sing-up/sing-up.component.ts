import {Component, inject, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import {User} from "../../../models/user.model";
import {UtilsService} from "../../../services/utils.service";


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent implements OnInit {


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {}

  get emailTouched() {
    return this.form.controls.email.touched;
  }

  get passwordTouched() {
    return this.form.controls.password.touched;
  }

  get nameTouched() {
    return this.form.controls.name.touched;
  }

  async submit() {
    if(this.form.valid){

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.signUp(this.form.value as User).then(async res =>{

        await this.firebaseSvc.updateUser(this.form.value.name);
        console.log(res);

      }).catch(error =>{
        console.error(error);

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })

      }).finally(()=>{
        loading.dismiss();
      })
    }
  }


}
