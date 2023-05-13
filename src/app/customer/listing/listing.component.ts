import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import {  Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';


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
  public columnsFilters = {}
  customers: Customer[] = []

  public dataSource  : MatTableDataSource<Customer>

  constructor(private service: CustomerService,private router: Router, public dialog:MatDialog){
    this.dataSource = new MatTableDataSource<Customer>();
  }


  ngOnInit(): void {
    this.service.getAll().subscribe((customers) => (
      this.customers = customers,
      this.dataSource = new MatTableDataSource(this.customers),
      this.dataSource.paginator = this.paginator,
      this.dataSource.sort = this.sort
    ))
  }
/*  //la fonction openDialog
 openDialog(){
    const dialogRef =this.dialog.open(DeleteComponent)}*/

 /*   let dialogRef = this.dialog.open(DeleteComponent, {data: { modalTitle: `${customer.name}`}})
     dialogRef.afterClosed().subscribe(confirm => {
      console.log('Dialog confirm : ${confirm}');
     })
  }

 openDialog(customer: Customer){
    let dialogRef = this.dialog.open(DeleteComponent, {data: { modalTitle: `${customer.name}`}})//second arguments for past this data in dialog 
    dialogRef.afterClosed().subscribe(confirm => {
      if(confirm) {
        this.CustomerService.delete(customer).subscribe(() => {
          this.customers = this.customers.filter((t) => t.id !== customer.id)
          // this.router.navigate(['/customer'], { relativeTo: this.Activatedroute})
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
*/
 

openDialog(customer: Customer){
  let dialogRef = this.dialog.open(DeleteComponent, {data: { modalTitle: `${customer.name}`}})
  dialogRef.afterClosed().subscribe(confirm => {
    if(confirm) {
      this.service.delete(customer).subscribe(() => {
        this.customers = this.customers.filter((t) => t.id !== customer.id)
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

onEdit(id: string): void {
    this.router.navigate(['edit', id]);
  }


  applyFilter(event: any): void {
    console.log(this.customers)
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
