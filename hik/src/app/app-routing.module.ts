

import { HikadminComponent } from './components/hikadmin/hikadmin.component';
import { LoginComponent } from './components/login/login.component';
import { ekipmanlarComponent } from './components/ekipmanlar/ekipmanlar.component';
import { ekipmanlarKayitComponent } from './components/ekipmanlarKayit/ekipmanlarKayit.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';



const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  {
    path: '',
    component:
      AnasayfaComponent,

  }
  ,
  { path: 'login', component: LoginComponent },
  { path: 'kayitlar', component: KayitlarComponent },
  { path: 'hakkimizda', component: HakkimizdaComponent },
  { path: 'iletisim', component: IletisimComponent },
  { path: 'urunler', component: UrunlerComponent },
  { path: 'ekipmanlar', component: ekipmanlarComponent},
  { path: 'ekipmanlarkayit', component: ekipmanlarKayitComponent },
  { path: 'hikadmin', component: HikadminComponent,canActivate: [AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  }},
  { path: 'uyelogin', component: UyeloginComponent },
  { path: 'uyeregister', component: UyeregisterComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
