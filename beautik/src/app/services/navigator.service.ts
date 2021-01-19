import { AnimationCurve } from '@nativescript/core/ui/enums';
import { RouterExtensions } from '@nativescript/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router: RouterExtensions) { }

  navigate(route: any, options?: any) {
    this.router.navigate([`/${route}`],
      {
        animated: true,
        transition: {
          duration: 500 || options.duration,
          name: 'slide' || options.name,
          curve: AnimationCurve.easeInOut || options.cuve,
        }
      }
    )
  }
}
