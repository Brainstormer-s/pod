import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  // IonLabel,
  IonRouterOutlet,
  IonIcon,
} from "@ionic/react";

import Category from "./Component/Category"
import Home from "./Component/Home"
import Search from "./Component/Search"
import Comedy from "./Component/categories/Comedy"
import Education  from "./Component/categories/Education"
import Fiction  from "./Component/categories/Fiction"
import Business  from "./Component/categories/Business"
import Music  from "./Component/categories/Music"
import Science  from "./Component/categories/Science"
import Sport  from "./Component/categories/Sport"
import Technology  from "./Component/categories/Technology"
import Podcast  from "./Component/categories/Podcast"




import { IonReactRouter } from "@ionic/react-router";
import { Route , Redirect} from "react-router-dom";
import { home, search, apps } from "ionicons/icons";






function App() {
  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonHeader> */}
          <IonToolbar>
            <IonTitle>Pod</IonTitle>
          </IonToolbar>
        {/* </IonHeader> */}
       
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/cate"  component={Category} />
              <Route path="/search"  component={Search} />
              <Route  path="/home"  component={Home} />
              <Route path="/comedy"  component={Comedy} />
              <Route path="/education"  component={Education} />
              <Route  path="/fiction"  component={Fiction} /> 
              <Route path="/business"  component={Business} />
              <Route path="/music"  component={Music} />
              <Route  path="/science"  component={Science} />
              <Route path="/sport"  component={Sport} />
              <Route path="/technology"  component={Technology} />
              <Route path="/podcast/path:link"  component={Podcast} />
              <Redirect  exact from='/' to='/home' />
            </IonRouterOutlet>
            <IonTabBar color='secondary' slot="bottom">
              <IonTabButton tab='home' href='/home' >
                <ion-icon icon={home}/>
              </IonTabButton>
              <IonTabButton tab='cate' href='/cate'>
                <ion-icon icon={apps}  ></ion-icon>
              </IonTabButton>
              <IonTabButton tab='search' href='/search'>
                <IonIcon icon={search} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
