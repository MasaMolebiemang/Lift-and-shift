import { Component } from '@angular/core';
import { Platform,IonicPage, NavController, NavParams,LoadingController,AlertController, } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ApiProvider} from '../../providers/api/api';
import {HomePage} from '../home/home';
import {Storage} from '@ionic/storage';
// import { Network } from '@ionic-native/network';
import { Http } from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-sendemailaccessories',
  templateUrl: 'sendemailaccessories.html',
})
export class SendemailaccessoriesPage {


  object:any
  Accessories:any
  installations:any
  sumtotal:any
  vat:any
  finalTotal:any 


  sendobject:any
  sendDATA:any
  token:any
  sendemailData :any

  auto: any
  business: any

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public storage: Storage, public http: Http, ) {
  
    
    this.business = navParams.get('business')
    console.log("bu", this.business)

    this.auto = navParams.get('auto')
    console.log("", this.auto) 

    if (this.auto == "true") {

      this.sendemailData = { "cc": "", "deliverytime": "", "notes": "" }


    

       this.sendemailData = { "BusinessName": this.business.Name, "Address": this.business.PhysicalAddress, "ContactPerson": this.business.ContactPerson, "ContactNo": this.business.CONTACTCELLNUMBER, "to": this.business.CONTACTEMAIL, "cc": this.sendemailData.cc, "deliverytime": this.sendemailData.deliverytime, "notes": this.sendemailData.notes }

      // this.sendemailData = { "BusinessName": "", "Address": "", "ContactPerson": "", "ContactNo": "", "to": "", "cc": "", "deliverytime": "", "notes": "" }


      this.object = navParams.get('object')
      console.log("", this.object)


      console.log("id is empty", this.object[0].id)
      this.Accessories = navParams.get('Accessories')
      console.log(" ID", this.Accessories)


      this.installations = navParams.get('installations')
      console.log("", this.installations)
      this.sumtotal = navParams.get('sumtotal')
      console.log("", this.sumtotal)
      this.vat = navParams.get('vat')
      console.log("", this.vat)
      this.finalTotal = navParams.get('finalTotal')
      console.log("", this.finalTotal)


      if (this.object[0].id == "") {

        console.log("one")

        // this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }


        this.sendobject = { "main_product_id": '327', "main_product_info": this.Accessories, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }

      } else {

        this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData , "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }
        console.log("auto object", this.sendobject )

      }


      console.log("id is empty", this.object[0].id)
      this.Accessories = navParams.get('Accessories')
      console.log("", this.Accessories)

      this.installations = navParams.get('installations')
      console.log("", this.installations)
      this.sumtotal = navParams.get('sumtotal')
      console.log("", this.sumtotal)
      this.vat = navParams.get('vat')
      console.log("", this.vat)
      this.finalTotal = navParams.get('finalTotal')
      console.log("", this.finalTotal)

 
      this.storage.ready();

      this.storage.get('token-to-send-quote').then((token) => {
        this.token = token
      })




    }
    else{


      this.object = navParams.get('object')
      console.log("", this.object)

      console.log("id is empty", this.object[0].id)

      this.Accessories = navParams.get('Accessories')
      console.log("", this.Accessories)


      this.installations = navParams.get('installations')
      console.log("", this.installations)
      this.sumtotal = navParams.get('sumtotal')
      console.log("", this.sumtotal)
      this.vat = navParams.get('vat')
      console.log("", this.vat)
      this.finalTotal = navParams.get('finalTotal')
      console.log("", this.finalTotal)

      this.sendemailData = { "BusinessName": "", "Address": "", "ContactPerson": "", "ContactNo": "", "to": "", "cc": "", "deliverytime": "", "notes": "" }


      if (this.object[0].id == "") {

      console.log("accessories inside")

        this.sendobject = { "main_product_id": '327', "main_product_info": this.Accessories, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }

      } else {

        console.log("accessories inside 2")

        this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }


      }


      this.storage.ready();

      this.storage.get('token-to-send-quote').then((token) => {
        this.token = token
      })


    }

    this.token = localStorage.getItem('token')
    console.log("local", this.token)


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //test for available network????????????????????/

      this.http.get('http://www.trackatrade.applord-db.co.za/payments/success.php').map(res => res.text())
        .subscribe(data => {

          console.log(data);

          var checkStatus = '{"status":"Network available"}';


          if (checkStatus == data) {


          }
          else {
            let alert = this.alertCtrl.create({
              subTitle: 'Error, No connection',
              buttons: ['Ok']
            });
            alert.present();
          }

        }, error => {
          console.log("Ehhhh", error);
          let alert = this.alertCtrl.create({
            subTitle: 'Error, No connection',
            buttons: ['Ok']
          });
          alert.present();

        });


    //   // watch network for a disconnect
    //   let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    //     console.log('network was disconnected :-(');

    //     let alert = this.alertCtrl.create({
    //       title:"error",
    //       subTitle: 'Error,'+ disconnectSubscription,
    //       buttons: ['Ok']
    //     });
    //     alert.present();

    //   });

    //   // stop disconnect watch
    //   //disconnectSubscription.unsubscribe();

    //   this.network.onchange().subscribe((data) => {
    //     console.log(data);

    //   })


    //   // watch network for a connection
    //   let connectSubscription = this.network.onConnect().subscribe(() => {
    //     console.log('network connected!');
    //     // We just got a connection but we need to wait briefly
    //     // before we determine the connection type. Might need to wait.
    //     // prior to doing any api requests as well.
    //     let alert = this.alertCtrl.create({
    //       subTitle: 'Connected to network',
    //       buttons: ['Ok']
    //     });
    //     alert.present();

    //     setTimeout(() => {
    //       if (this.network.type === 'wifi') {
    //         console.log('we got a wifi connection, woohoo!');
    //       }
    //     }, 3000);
    //   });


    });
  

  }

  

  sendaccessories(){


    console.log("bu", this.business)

    // console.log("bu", this.business)


    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 2000


    });

    loader.dismiss();


    loader.present().then(()=>{


      if (this.auto == "true"){


        this.sendemailData = { "BusinessName": this.business.Name, "Address": this.business.PhysicalAddress, "ContactPerson": this.business.ContactPerson, "ContactNo": this.business.CONTACTCELLNUMBER, "to": this.business.CONTACTEMAIL, "cc": this.sendemailData.cc, "deliverytime": this.sendemailData.deliverytime, "notes": this.sendemailData.notes }

        if (this.object[0].id == "") {

          console.log("one")

          this.sendobject = { "main_product_id": '327', "main_product_info": this.Accessories, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }

        } else {

          this.sendobject = { "main_product_id": this.object[0].id, "main_product_info": this.object, "bussiness_name": this.sendemailData, "fifteen_percent_vat": this.vat, "zar_total": this.finalTotal, "hidendetails": this.object[0].Quote_type, "quote_type": this.object[0].quote_type, "discount_percentage": "0.025", "discount_amount": this.object[0].discount_percentage, "Instalation": this.installations, "Accessories": this.Accessories, "zar_sub_total": this.sumtotal }
          console.log("auto object", this.sendobject)

        }


      } else{
        console.log("else", this.sendobject)
      }



   
      console.log("else", this.sendobject)
     


     

// kjfghjrbgrg

      this.Api.postsendemailquote(this.sendobject,this.token).subscribe(QuoteData=>{
          this.sendDATA =QuoteData
        console.log("view", this.sendDATA.message)
        console.log("view", this.sendDATA)

          

        if (this.sendDATA.message === "Quote sent successifully"){
            loader.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Your quote has been sent successfully to the email address you entered ',
              buttons: [
                          {
                            text: 'Yes',
                            handler: data => {
                              console.log('Cancel clicked');
                              this.navCtrl.push(HomePage)
                            }
                          }
                        ]
            });
               alert.present();
          }
          else{

            loader.dismiss();

            let alert = this.alertCtrl.create({
              title:'Error',
              message: '' + this.sendDATA.error,
              buttons: ['OK']
            });

            alert.present();

          }

      },(err)=>{

        loader.dismiss();
        console.log("error message",err)
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();

      })

    })

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SendemailaccessoriesPage');
  }

}
