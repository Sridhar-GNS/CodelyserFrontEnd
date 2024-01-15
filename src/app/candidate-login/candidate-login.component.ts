import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CredentialResponse } from 'google-one-tap';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrl: './candidate-login.component.scss'
})
export class CandidateLoginComponent {
  constructor(
    private router: Router,
    private service: AuthService,
    private _ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        // client_id: '1099395230005-3al1826neta10s18um44o98i62g8to5b.apps.googleusercontent.com',
        client_id: '308714834533-00grh0uvasp68lbaes7df64r6guq6cil.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large', width: '100%' }
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
  }

  // Whenever google responds back with a token then that will go to this function
  async handleCredentialResponse(response: CredentialResponse) {
    try {
      await firstValueFrom(this.service.saveUser(response.credential)).then(
        (x) => {
          this.service.setToken(x.tokenPayload);
          this.router.navigate(['/testPage']);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
