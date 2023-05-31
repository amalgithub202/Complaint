import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  public displayedColumns : string[] = ['id', 'content', 'customerName', 'employeName'];
  public columnsToDisplay : string[] = [ ... this.displayedColumns, 'actions']
  complaints: Complaint[] = []
  public columnsFilters = {}
  public dataSource  : MatTableDataSource<Complaint>


  constructor(private router: Router,private Activatedroute: ActivatedRoute, private service: ComplaintService, public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<Complaint>();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((complaints) => (
      this.complaints = complaints,
      this.dataSource = new MatTableDataSource(this.complaints),
      this.dataSource.paginator = this.paginator,
      this.dataSource.sort = this.sort,
      console.log(this.complaints)
    ))
  }

   onEdit(id: string): void {
    this.router.navigate(['complaint/edit', id]);
  }
  openDialog(complaint: Complaint){
    let dialogRef = this.dialog.open(DeleteComponent, {data: { modalTitle: `${complaint.content}`}})
    dialogRef.afterClosed().subscribe(confirm => {
      if(confirm) {
        this.service.delete(complaint).subscribe(() => {
          this.complaints = this.complaints.filter((t) => t.id !== complaint.id)
          this.reloadCurrentRoute()
        })
      }
    })
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  applyFilter(event: any): void {
    console.log(this.complaints)
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
