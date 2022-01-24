import { Injectable } from '@angular/core';

@Injectable()
export class UserStorageService {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private USERNAMEKEY = 'USER_NAME';

    public setUsername(username: string): void {
        localStorage.setItem(this.USERNAMEKEY, username);
    }

    public getUsername(): string {
        return localStorage.getItem(this.USERNAMEKEY);
    }
}
