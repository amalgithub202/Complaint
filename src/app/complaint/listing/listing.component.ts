import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

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
  complaint: Complaint[] = []
  public columnsFilters = {}
  public dataSource  : MatTableDataSource<Complaint>


  constructor(private router: Router,private Activatedroute: ActivatedRoute, private service: ComplaintService, public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<Complaint>();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((complaint) => (
      this.complaint = complaint,
      this.dataSource = new MatTableDataSource(this.complaint),
      this.dataSource.paginator = this.paginator,
      this.dataSource.sort = this.sort,
      console.log(this.complaint)
    ))
  }

  // onEdit(id: string): void {
  //   this.router.navigate(['edit', id]);
  // }

  applyFilter(event: any): void {
    console.log(this.complaint)
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
