import { IonImg, IonContent, IonThumbnail, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/react';
import React , {useState} from 'react';
import './Tab6.css';
const QRCode = require('qrcode.react');


const image =  { src: 'https://i.ibb.co/cNTPTJV/Whats-App-Image-2020-04-26-at-7-05-53-AM.jpg'};
  const IonBreak : React.FC = () => <br></br>
  const Tab6 : React.FC = () => {

    const invoice = {
        invoiceNumber : "4693442",
        paidBy : "Mahmoud Hassan",
        elements : [
            {
                name:"Milk",
                qty: "1",
                price:"10"
            }
        ]
    }

    return (
      <IonPage>
        <IonHeader>
      <IonToolbar>
            <IonThumbnail slot="start">
            <IonImg src={image.src} />
            </IonThumbnail> 
          </IonToolbar>
      </IonHeader>
        <IonBreak/>
        <IonBreak/>
        <IonContent class="ion-text-center">
        <IonHeader class="ion-text-center"> Invoice </IonHeader>
        <IonBreak/>
        <IonBreak/>
            <QRCode value={JSON.stringify(invoice)} />
            <IonBreak/>
            <IonBreak/>
        <IonGrid>
            <IonRow>
            <IonButton color="tertiary"> Download PDF </IonButton>
            </IonRow>
            <IonRow>
            <IonButton color="tertiary" > Send Email </IonButton>
            </IonRow>
        </IonGrid>
        </IonContent>
      </IonPage >
    );
  }

export default Tab6;