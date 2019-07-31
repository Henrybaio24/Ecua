import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EquiposComponent } from '../equipos/equipos.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})

export class ListaEquiposComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver,
    private dialogo: MatDialog) { }

  abrirModal(): void {
    const dialogRef = this.dialogo.open(EquiposComponent, {
      height: '380px',
      width: '420px',
    });



  }


}