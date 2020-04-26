import React, {useState} from  'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonImg, IonContent , IonGrid
,IonButton,IonRow,IonCol,
IonLabel,
IonInput} from '@ionic/react';


const image =  { src: 'https://i.ibb.co/cNTPTJV/Whats-App-Image-2020-04-26-at-7-05-53-AM.jpg'};

const IonBreak : React.FC = () => <br></br>

const Tab5 : React.FC  = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();

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
          <IonItem>
          <IonLabel>Card Holder Name</IonLabel>
          </IonItem><IonItem>
          <IonInput value={text} placeholder="" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
          <IonLabel>Card Number</IonLabel>
          </IonItem>
          <IonItem>
          <IonInput type="number" value={number} placeholder="" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          <IonItem>
          <IonLabel>CVV</IonLabel>
          <IonInput type="number" value={number} placeholder="" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
      </IonList>
      <IonBreak/>
      <IonBreak/>
      <IonBreak/>
      <IonBreak/>
      <IonButton color="success" href="/tab6"> Confirm Payment </IonButton>
      </IonContent>
    </IonPage>
    )
}


export default Tab5;
