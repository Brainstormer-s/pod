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

const Podcast = (props) => {
    const { params } = props.match;
    console.log(params.link)
    return (
        <ion-content class="ion-padding">

        </ion-content>
    )
}

export default Podcast
