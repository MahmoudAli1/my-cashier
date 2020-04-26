import React, {useState} from  'react';
import { IonSearchbar, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonImg, IonContent , IonGrid
,IonButton,IonModal,IonCol,
IonLabel,
IonInput} from '@ionic/react';


const image =  { src: 'https://i.ibb.co/cNTPTJV/Whats-App-Image-2020-04-26-at-7-05-53-AM.jpg'};

const IonBreak : React.FC = () => <br></br>

const Tab7 : React.FC  = () => {

    const itemsList = ['Milk', 'Pepsi', 'Shampoo', 'Butter'];



    const [searchText, setSearchText] = useState('');
    const [showModal, setShowModal] = useState(false);
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
      <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated></IonSearchbar>
      <IonList>
      {itemsList.filter( name => {
          return name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 
      }).map(name => {
          return (
              <IonItem button onClick={() => { setShowModal(true)}}>
                  {name}
              </IonItem>
          )
      })}
      </IonList>
      <IonModal isOpen={showModal}>
        <IonList>
        <IonItem>
        <IonThumbnail slot="start">
          <img src="https://www.almarai.com/wp-content/uploads/2018/10/03-Almarai-Fresh-Milk-Full-Fat-1-L-PET-English.jpg" />
        </IonThumbnail>
        <IonLabel>Milk</IonLabel>
        <IonLabel position="stacked">Price : 10 SAR </IonLabel>
        <IonLabel position="stacked">Total Weight : 300mL </IonLabel>
      </IonItem>
        </IonList>
        <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
      </IonModal>
      </IonContent>
    </IonPage>
    )
}


export default Tab7;
