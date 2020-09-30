import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {MenuitemsPage} from '../menuitems/menuitems';
import {AccessoriesPage} from '../accessories/accessories';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  ID:any
  token:any
  test:any
  prodcut:any
  items:any


 installation:any = []
 new_price:any =0
 object:any =[]


 
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams,public Api:ApiProvider) {
  

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 2000
    });
    loader.dismiss();

    loader.present().then(() => {

    this.prodcut = navParams.get('prodcut')
    console.log("ID",this.prodcut)
  
   this.Api.getmenuItems(this.prodcut).subscribe(DATA =>{
     this.test = DATA
     loader.dismiss();
     console.log("menu items",this.test.menus)

     this.items = this.test.menus

   })
    })

  }


  menuitems(item){



    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 2000
    });
    loader.dismiss();

    loader.present().then(() => {


    console.log("navigate same page",item.id)

    if(item.description == "quote_type"){


      loader.dismiss();
      this.object = [{"CranepriceFormated":"","Quote_type":"","RawCranePrice":"","discount_percentage":"","id":"","img":"","name":"","quote_type":item.name}]
      
    this.navCtrl.push(AccessoriesPage,{
     object:this.object,
     installation:this.installation,
     new_price:this.new_price
    })
      console.log("accessories",item)
      console.log("accessories",item.name)
        
    }

    else if(item.childrencount != 0 && item.description != "quote_type" ){

      console.log("navigate same page",item.id)

      loader.dismiss();

      this.Api.getmenuItems(item.id).subscribe(DATA =>{
        this.test = DATA
        console.log("menu items",this.test.menus)
        this.items = this.test.menus
      })

    }

    else{
      loader.dismiss();
     this.navCtrl.push(MenuitemsPage,{
      item : item.id
     })
    }

  })

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
