import React from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonImg, IonContent , IonGrid
,IonButton,IonRow,IonCol,
IonLabel} from '@ionic/react';
import './Tab1.css';

type Item = {
  src: string;
};


const IonBreak : React.FC = () => <br></br>


const items: Item[] = [{ src: 'https://i.ibb.co/cNTPTJV/Whats-App-Image-2020-04-26-at-7-05-53-AM.jpg'}];

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large"  class="ion-text-center"  > My Cashier </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
      <IonBreak></IonBreak>
      <IonBreak></IonBreak>
      <IonBreak></IonBreak>
      <IonRow>
      <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="end">
            <IonImg src={image.src} />
          </IonThumbnail>
        </IonItem>
      ))}
    </IonList>
    </IonRow>
    <IonRow>
    <IonCol size="12">

    </IonCol>
    
    </IonRow>
    <IonRow>
    <IonCol size="12">
    <IonLabel class="ion-text-center" >No waiting anymore</IonLabel>
    </IonCol>
    </IonRow>
    <IonBreak></IonBreak>
      <IonBreak></IonBreak>
      <IonBreak></IonBreak>
      <IonBreak></IonBreak>
    <IonButton expand="block" color="tertiary" href="/tab2" >Get Started</IonButton>
    </IonGrid>
    </IonPage>
  );
};

export default Tab1;
