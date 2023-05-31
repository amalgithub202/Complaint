import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { DeleteComponent } from '../delete/delete.component';

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
  employes: Employe[] = []
  public columnsFilters = {}
  public dataSource  : MatTableDataSource<Employe>

  constructor(private router: Router,private Activatedroute: ActivatedRoute, private service: EmployeService, public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<Employe>();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((employes) => (
      this.employes = employes,
      this.dataSource = new MatTableDataSource(this.employes),
      this.dataSource.paginator = this.paginator,
      this.dataSource.sort = this.sort
    ))
  }

  onEdit(id: string): void {
    this.router.navigate(['employee/edit', id]);
  }
  openDialog(employee: Employe){
    let dialogRef = this.dialog.open(DeleteComponent, {data: { modalTitle: `${employee.name}`}})
    dialogRef.afterClosed().subscribe(confirm => {
      if(confirm) {
        this.service.delete(employee).subscribe(() => {
          this.employes = this.employes.filter((t) => t.id !== employee.id)
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
    console.log(this.employes)
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
