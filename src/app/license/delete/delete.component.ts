import { Component ,Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor( public dialogRef: MatDialogRef<DeleteComponent>,public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data :any){}
}
