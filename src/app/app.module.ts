import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCheckboxModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatRadioModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule } from '@angular/material';
import { TorneosComponent } from './torneos/torneos.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ModalTorneosComponent } from './modal-torneos/modal-torneos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalFechasComponent } from './modal-fechas/modal-fechas.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ModalSalirComponent } from './modal-salir/modal-salir.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TorneosComponent,
    ListaEquiposComponent,
    InicioComponent,
    ModalTorneosComponent,
    ModalFechasComponent,
    EquiposComponent,
    ModalSalirComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    NgbCarouselModule, 
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
    
  ],
  providers: [],

  entryComponents: [
    ModalTorneosComponent, ModalFechasComponent, EquiposComponent, ModalSalirComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
