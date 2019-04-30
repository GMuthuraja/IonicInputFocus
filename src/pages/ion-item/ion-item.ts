import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { Searchbar } from 'ionic-angular';
import { Renderer } from '@angular/core';

/**
 * Generated class for the IonItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ion-item',
  templateUrl: 'ion-item.html',
})

export class IonItemPage {

  @ViewChild('searchbar') searchbar : Searchbar;

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IonItemPage');
    let elem = <HTMLInputElement>document.querySelector('.searchbar input');
    if (elem) {
        elem.focus();
    }
  }

  onFocusField(event){
    // setTimeout(() => {
    // console.log(this.searchbar);
    // },1000);event
    console.log(event);
  }
}
