import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonLoading,
  IonSpinner,
  //   IonCard,
  //   IonCardHeader,
  //   IonCardSubtitle,
  //   IonCardTitle,
  //   IonCardContent,
} from "@ionic/react";

import ReactHtmlParser from "react-html-parser";
import style from "./cate.module.css";
import axios from "axios";

const  Business = () => {
    const [datas, setdata] = useState();

    useEffect(() => {
      async function getdatas() {
        try {
          const res = await axios.get("http://127.0.0.1:8000/api/business");
          setdata(res.data);
        } catch (error) {
          console.log(error);
        }
      }
  
      getdatas();
    }, []);
  
    if (datas) {
      let i;
      let html = "";
      let link = "";
      for (i = 0; i < datas.length; i++) {
        link = "/podcast/" + datas[i].link
        html += `
               <a href=${link} style="
                  width: 40vw;
                  height: auto;
                  margin: 10px; 
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  text-decoration: none;
                  color: black;
                  text-align: center;
                  flex-grow: 1;
                  min-width: 100px;
            ">
                <img src='${datas[i].img}' />
                <h6>${datas[i].title}</h6>
              </a>
        `;
      }
     
      return (
        <ion-content class="ion-padding">
          <br />
          <br />
          <h5>Business</h5>
          <br />
          <div className={style.con}>{ReactHtmlParser(html)}</div>
        </ion-content>
      );
    } else {
      return (
        <main style={{
     
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height:'100%' 
}}>

        <br/>
        <br/>
        <br/>
        <IonSpinner name='crescent' color="secondary" />
      </main>
      );
    }
  };

export default  Business
