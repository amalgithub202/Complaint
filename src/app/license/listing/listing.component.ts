import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { License } from '../license';
import { LicenseService } from '../license.service';
import { DeleteComponent } from '../delete/delete.component';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  public displayedColumns : string[] = ['id','product','dateFrom','dateTo'];
  public columnsToDisplay : string[] = [ ... this.displayedColumns, 'actions']
  licenses: License[] = []
  public columnsFilters = {}
  public dataSource  : MatTableDataSource<License>

  constructor(private router: Router,private Activatedroute: ActivatedRoute, private service: LicenseService, public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<License>();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((licenses) => (
      this.licenses = licenses,
      this.dataSource = new MatTableDataSource(this.licenses),
      this.dataSource.paginator = this.paginator,
      this.dataSource.sort = this.sort
    ))
  }

  onEdit(id: string): void {
    this.router.navigate(['license/edit', id]);
  }
  openDialog(license: License){
    let dialogRef = this.dialog.open(DeleteComponent, {data: { modalTitle: `${license.id}`}})
    dialogRef.afterClosed().subscribe(confirm => {
      if(confirm) {
        this.service.delete(license).subscribe(() => {
          this.licenses = this.licenses.filter((t) => t.id !== license.id)
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
    console.log(this.licenses)
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}


