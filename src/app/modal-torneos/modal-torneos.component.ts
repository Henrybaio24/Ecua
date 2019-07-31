import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';




@Component({
  selector: 'app-modal-torneos',
  templateUrl: './modal-torneos.component.html',
  styleUrls: ['./modal-torneos.component.css']
})
export class ModalTorneosComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<ModalTorneosComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    
  ) { }


  ngOnInit() {
  }

  
  clickSalir(){
    this.dialogRef.close();
  }


}


