import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-salir',
  templateUrl: './modal-salir.component.html',
  styleUrls: ['./modal-salir.component.css']
})
export class ModalSalirComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<ModalSalirComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,) { }

  ngOnInit() {
  }

  clickSalir(){
    this.dialogRef.close();
  }


}
