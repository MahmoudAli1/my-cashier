import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import {IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonImg, IonContent , IonGrid
  ,IonButton,IonRow,IonCol,
  IonLabel} from '@ionic/react';
import './Tab2.css';

  const image =  { src: 'https://i.ibb.co/cNTPTJV/Whats-App-Image-2020-04-26-at-7-05-53-AM.jpg'};

  const IonBreak : React.FC = () => <br></br>

  const Tab2 : React.FC = () => {
    const [ results , setResult ] =  useState({result : 
      {
        productName:"",
        price:"",
        details:""
      }
    })

  const handleScan = (data: any) => {
    if (data) {
      setResult({
        result: JSON.parse(data)
      })
      console.log(JSON.parse(data));
      console.log(results);
    }
  }
  const handleError = (err: any) => {
    console.error(err)
  }

  const handlePrice = (results : any) => {
    if(results.result.price === ''){

    }
    else{
      return "Price : " + results.result.price ; 
    }
  }

  const handleName = (results : any) => {
    if(results.result.productName === ''){
        return "No Results";
    }
    else{
      return "Product Name : " + results.result.productName ;
    }
  }

  const handleDetails = (results : any ) => {
    if(results.result.details === ''){
    }
    else{
      const details = results.result.details ;
      let str = 'Details  ';
          Object.keys(details).forEach( (key) => {
              str += key + " : " + details[key] + " , "
          });
      return str ; 
    }
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
        <IonContent>
        <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' , height : '70%' }}
        />
              <p>{handleName(results)}</p>
              <p>{handlePrice(results)}</p>
              <p>{handleDetails(results)}</p>
              <IonBreak/>
              <IonBreak/>
              <IonBreak/>
        <IonGrid>
          <IonRow>
            <IonCol size="3"></IonCol>
            <IonCol  size="6">
            <IonButton color="success"> Add to Cart </IonButton>
            </IonCol>
            <IonCol size="3"></IonCol>
            </IonRow>
            <IonRow>
            <IonCol size="3"></IonCol>
            <IonCol  size="6">
            <IonButton href="/Tab3" color="success"> Checkout </IonButton>
            </IonCol>
            <IonCol size="3"></IonCol>
          </IonRow>
        </IonGrid>
        
        
        </IonContent>
      </IonPage>
    )
  }


export default Tab2;