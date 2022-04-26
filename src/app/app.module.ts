import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { UsdindPipe } from './pipes/usdind.pipe';

// import {MatDatepicker} from '@angular/material/datepicker';
// import {MatCard} from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@angular/fire/auth';
import { AuthenticationService } from '../app/services/authentication.service';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDabaseModule } from '@angular/fire/database'
//  import { AngularFireStorageModule } from '@angular/fire/storage';
//  import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyApEXy1l782z3nTwo__vhMY3HiAc2qBibE",
  authDomain: "gt-admin-1afbd.firebaseapp.com",
  projectId: "gt-admin-1afbd",
  storageBucket: "gt-admin-1afbd.appspot.com",
  messagingSenderId: "408481115747",
  appId: "1:408481115747:web:83cb496ff3e89fbf83d256",
  measurementId: "G-XEN5S7DCPL"
};
@NgModule({
  declarations: [
    AppComponent,
    UsdindPipe,
    AdminLoginComponent,
    HomeComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    // MatCard,
    MatCardModule,
    // MatDatepicker,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),

    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    FormsModule, ReactiveFormsModule, MatMenuModule, HttpClientModule, AuthModule


  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
