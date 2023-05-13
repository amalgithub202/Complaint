import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

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
  products: Product[] = []
  public columnsFilters = {}
  public dataSource  : MatTableDataSource<Product>


  constructor(private router: Router,private Activatedroute: ActivatedRoute, private service: ProductService, public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<Product>();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((products) => (
      this.products = products,
      this.dataSource = new MatTableDataSource(this.products),
      this.dataSource.paginator = this.paginator,
      this.dataSource.sort = this.sort
    ))
  }

  onEdit(id:String) : void{
    this.router.navigate(['edit',id]);
  }

  applyFilter(event: any): void {
    console.log(this.products)
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
