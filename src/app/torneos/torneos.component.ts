import { Component  } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalTorneosComponent } from '../modal-torneos/modal-torneos.component';
import { ModalFechasComponent } from '../modal-fechas/modal-fechas.component';
import { ModalSalirComponent } from '../modal-salir/modal-salir.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private dialogo: MatDialog) {}

  abrirModal():void{
    const dialogRef = this.dialogo.open(ModalTorneosComponent, {
      height: '380px',
      width: '420px',
    });
    
  }

  abrirModalF():void{
    const dialogRef = this.dialogo.open(ModalFechasComponent, {
      height: '380px',
      width: '420px',
    });
    
  }

  abrirModalS():void{
    const dialogRef = this.dialogo.open(ModalSalirComponent, {
      height: '215px',
      width: '420px',
    });
    
  }

}
