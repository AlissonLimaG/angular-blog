import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  dark:boolean = true;
  
  public switchTheme(){
    this.dark = !this.dark

    if(this.dark){
      document.documentElement.style.setProperty("--background-color","#111111")
      document.documentElement.style.setProperty("--text-color","whitesmoke")
    }else{
      document.documentElement.style.setProperty("--background-color","whitesmoke")
      document.documentElement.style.setProperty("--text-color","#111111")
    }
  }

}
