import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ClienteService } from './clientes/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'clientes', component: ClientesComponent },
  {path: 'clientes/form', component: FormComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    footerComponent,
    ClientesComponent,
    DirectivasComponent,
    FormComponent
  ],  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],

  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
