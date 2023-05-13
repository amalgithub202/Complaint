import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '../status';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {


  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  public displayedColumns : string[] = ['id', 'name'];
  public columnsToDisplay : string[] = [ ... this.displayedColumns, 'actions']
  status: Status[] = []
  public columnsFilters = {}
  public dataSource  : MatTableDataSource<Status>


  constructor(private router: Router,private Activatedroute: ActivatedRoute, private service: StatusService, public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<Status>();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((status) => (
      this.status = status,
      this.dataSource = new MatTableDataSource(this.status),
      this.dataSource.paginator = this.paginator,
      this.dataSource.sort = this.sort
    ))
  }

  onEdit(id:String) : void{
    this.router.navigate(['edit',id]);
  }

  applyFilter(event: any): void {
    console.log(this.status)
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
