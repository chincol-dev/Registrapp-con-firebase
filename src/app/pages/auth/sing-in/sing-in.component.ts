import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from '../../../services/utils.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
})
export class SingInComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  isLoading: boolean = false;
  errorMessage: string | null = null;
  userData = null;

  constructor(
    private firebaseService: FirebaseService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    // Inicialización del componente si es necesario
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      this.isLoading = true;
      this.errorMessage = null;

      const loading = await this.utilsService.loading();
      await loading.present();

      const { email, password } = this.form.value;
      if (email && password) {
        const user: User = { email, password };
        this.firebaseService.signIn(user)
          .then(credentials => {
            this.firebaseService.getUserData(credentials.user.uid).subscribe(data => {
              this.userData = data[0];
              this.utilsService.saveInLocaleStorage('user', this.userData);
            });
            this.isLoading = false;
            loading.dismiss();

            if (this.userData.userType === 'student') {
              this.utilsService.routerLink('/student');
            } else if (this.userData.userType === 'teacher') {
              this.utilsService.routerLink('/teacher');
            }
          })
          .catch(error => {
            this.isLoading = false;
            loading.dismiss();
            this.errorMessage = error.message;
            this.utilsService.presentToast({
              message: 'Error al iniciar sesión: ' + error.message,
              duration: 3000,
              color: 'danger'
            });
          });
      }
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente';
      this.utilsService.presentToast({
        message: this.errorMessage,
        duration: 3000,
        color: 'warning'
      });
    }
  }
}
