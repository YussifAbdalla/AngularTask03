import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TitleService extends TitleStrategy {
    override updateTitle(routerStateSnapshot: RouterStateSnapshot): void {

        document.title = this.buildTitle(routerStateSnapshot) + " - Dome";  

    }
}
