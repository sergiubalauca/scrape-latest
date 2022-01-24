import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, map } from 'rxjs/operators';

import { AuthenticationService } from '../_services';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({ templateUrl: 'login.component.html' })
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    hide = true;

    public formValidationMessages = { username: [], password: [] };
    public showPassword = false;
    public togglePassButtonLabel = 'Show';
    // convenience getter for easy access to form fields

    public authServiceSubscription: Subscription;

    public constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private loadingController: LoadingController
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue && this.authenticationService.isAuthenticated()) {
            console.log('trying to redirect');
            this.router.navigate(['/Dashboard']);
        }
    }

    public get f() { return this.form.controls; }

    public ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

        this.formValidationMessages = {
            username: [
                { type: 'required', message: 'Username required' }
            ],
            password: [{ type: 'required', message: 'Password required' }],
        };
    }

    async onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.f.invalid) {
            return;
        }

        const loader = await this.loadingController.create();
        await loader.present();
        this.authServiceSubscription = this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                () => {
                    this.router.navigate(['/Dashboard']);
                },
                error => {
                    this.error = error;
                    loader.dismiss();
                },
                async () => {
                    loader.dismiss();
                });
    }

    public togglePassword() {
        this.showPassword = !this.showPassword;
        this.togglePassButtonLabel = this.showPassword ? 'Show' : 'Hide';
    }

    public ngOnDestroy() {
        if (this.authServiceSubscription) {
            this.authServiceSubscription.unsubscribe();
        }
    }
}
