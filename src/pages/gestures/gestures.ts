import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GesturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturesPage');
  }

  OnElementClicked() {
    console.log('I was clicked or touched');
  }

  onElementTapped() {
    console.log('I was tapped');
  }

  onElementPressed() {
    console.log('I was pressed');
  }

}
