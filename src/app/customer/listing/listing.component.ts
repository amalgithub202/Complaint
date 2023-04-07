import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

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

  constructor(private service: CustomerService){
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


  applyFilter(event: any): void {
    console.log(this.customers)
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
