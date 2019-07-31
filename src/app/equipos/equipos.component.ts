import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<EquiposComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,

  ){}

  ngOnInit() {
  }

  clickSalir(){
    this.dialogRef.close();
  }

}
