import React , {useState} from 'react';
import { IonItemOption, IonItemOptions, IonItemSliding, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonThumbnail , IonImg, IonButton, IonList, IonLabel } from '@ionic/react';
import './Tab3.css';
const image =  { src: 'https://i.ibb.co/cNTPTJV/Whats-App-Image-2020-04-26-at-7-05-53-AM.jpg'};

const IonBreak : React.FC = () => <br></br>


// const readData = () => {
//   const results: any = [] ; 
//   dbref.on('value', resp => {
//     results.push(snapshotToArray(resp));
//   });
//   return results;
// }
// const snapshotToArray = (snapshot: any) => {
//   const returnArr : any = {};

//   snapshot.forEach((childSnapshot: any) => {
//       const key = childSnapshot.key ; 
//       const item = childSnapshot.val();
//       returnArr[key] = (item);
//   });
//   return returnArr;
// }

const Tab3: React.FC = () => {

  // const [results , setResults ] = useState(readData());
  // console.log(results);

  return (
    <>
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
      <IonItemSliding>
        <IonItem>
        <IonThumbnail slot="start">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWLfJUBZash7wJpyanPF3bjHH3EoZyztgBEWI97gdGkSEH3yaOvq7HOHyStR8&usqp=CAc" />
        </IonThumbnail>
        <IonLabel>Chocolate </IonLabel>
        <IonLabel position="stacked" > Quantity : 5 </IonLabel>
        <IonLabel position="stacked" >Price : 20 SAR </IonLabel>
      </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
        <IonThumbnail slot="start">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRm-6XRMh1Ms3DREfFWuv2WEG9pKirXsHcOtHJVwFdCeEouad0-ahVijbvj-2ulB1HpWkxYXN1S&usqp=CAc" />
        </IonThumbnail>
        <IonLabel>Popcorn</IonLabel>
        <IonLabel position="stacked" > Quantity : 1 </IonLabel>
        <IonLabel position="stacked" >Price : 5 SAR </IonLabel>
      </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
        <IonThumbnail slot="start">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN7frKyCnwoQGRo1vpsb6fHJQ5hVmnmzjgWYYkVbeYQrVDy5nWZk7SW6RSRuM5kgGRW3SqiSY&usqp=CAc" />
        </IonThumbnail>
        <IonLabel>Hot Souce</IonLabel>
        <IonLabel position="stacked" > Quantity : 1 </IonLabel>
        <IonLabel position="stacked" >Price : 10 SAR </IonLabel>
      </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
        <IonThumbnail slot="start">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_0rnQjEp1-MPzkZvhTf-6LDTYHUHrwmjEPy1E-E3YOa-KFRXHR3vhwjzPrULfThvU35HXOww&usqp=CAc" />
        </IonThumbnail>
        <IonLabel>toothbrush</IonLabel>
        <IonLabel position="stacked" > Quantity : 1 </IonLabel>
        <IonLabel position="stacked" >Price : 30 SAR </IonLabel>
      </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
        <IonThumbnail slot="start">
          <img src="https://www.almarai.com/wp-content/uploads/2018/10/03-Almarai-Fresh-Milk-Full-Fat-1-L-PET-English.jpg" />
        </IonThumbnail>
        <IonLabel>Milk</IonLabel>
        <IonLabel position="stacked" > Quantity : 2 </IonLabel>
        <IonLabel position="stacked">Price : 10 SAR </IonLabel>
      </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
      <IonLabel>
      </IonLabel>
      <IonBreak/>
      <IonBreak/>
      <IonHeader class="ion-text-center" > Total Cost : 65 </IonHeader>
      <IonBreak/>
      <IonButton href="/Tab4" color="success"> Pay now </IonButton>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab3;
