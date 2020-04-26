import React from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonImg, IonContent , IonGrid
,IonButton,IonRow,IonCol,
IonLabel} from '@ionic/react';


const image =  { src: 'https://i.ibb.co/cNTPTJV/Whats-App-Image-2020-04-26-at-7-05-53-AM.jpg'};

const IonBreak : React.FC = () => <br></br>

const Tab4 : React.FC  = () => {
    return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
            <IonThumbnail slot="start">
            <IonImg src={image.src} />
            </IonThumbnail> 
          </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
      </IonList>
      <IonGrid>
      <IonBreak/>
      <IonBreak/>
      <IonBreak/>
      <IonBreak/>
      <IonBreak/>
      <IonRow>
          <IonHeader class="ion-text-center"> My Cashier </IonHeader>
          </IonRow>
          <IonBreak/>
          <IonRow>
          <IonButton  color="tertiary" href="/tab5"> Mada </IonButton>
          </IonRow>
          <IonBreak/>
          <IonRow>
          <IonButton  color="tertiary" > Credit Card </IonButton>
          </IonRow>
          <IonBreak/>
          <IonRow>
          <IonButton  color="tertiary" > Wallet </IonButton>
          </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
    )
}


export default Tab4;
