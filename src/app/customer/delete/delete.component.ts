

import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* import { Component,Inject,OnInit} from '@angular/core';//1- Inject
import { Customer } from '../customer';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';*/

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
 // constructor (@Inject(MAT_DIALOG_DATA) public data:any){}//make the dialogcomponent able of recieving data  
  constructor( public dialogRef: MatDialogRef<DeleteComponent>,public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data :any){}
}
