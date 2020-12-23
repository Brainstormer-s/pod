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
import style from "./category.module.css";
import axios from "axios";
import { Link } from 'react-router-dom'



const Category = () => {
  
    return (
      <ion-content class="ion-padding">
          <br/>
          <br/>
          <div className={style.con}>
            <Link to='/comedy' className={style.card}>
                <h3>Comedy</h3>
                <p>Comedy Podcasts to Keep You Laughing</p>
            </Link>
            <Link to='/education' className={style.card}>
                <h3>Education</h3>
                <p>Nothing ever becomes real till it is experienced.</p>
            </Link>
            <Link to='/fiction' className={style.card}>
                <h3>Fiction</h3>
                <p>Fiction is the lie through which we tell the truth</p>
            </Link>
            <Link to='/business' className={style.card}>
                <h3>Business</h3>
                <p>Business opportunities are like buses, there's always another one coming</p>
            </Link>
            <Link to='/music' className={style.card}>
                <h3>Music</h3>
                <p>Music is the soundtrack of your life.</p>
            </Link>
            <Link to='/science' className={style.card}>
                <h3>Science</h3>
                <p>Somewhere, something incredible is waiting to be known.</p>
            </Link>
            <Link to='/sport' className={style.card}>
                <h3>Sport</h3>
                <p>Age is no barrier. It’s a limitation you put on your mind.</p>
            </Link>
            <Link to='/technology' className={style.card}>
                <h3>Technology</h3>
                <p>Simplicity is about subtracting the obvious and adding the meaningful.</p>
            </Link>
            
          </div>
      </ion-content>
    );
    }

export default Category;
