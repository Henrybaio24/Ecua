import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-fechas',
  templateUrl: './modal-fechas.component.html',
  styleUrls: ['./modal-fechas.component.css']
})
export class ModalFechasComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<ModalFechasComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,

  ){}
  
    ngOnInit() {
  }

  clickSalir(){
    this.dialogRef.close();
  }

}
