import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Modulel } from '../modulel'; 
import { ModulelService } from '../modulel.service';
import { DeleteComponent } from '../delete/delete.component';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  public displayedColumns : string[] = ['id', 'name','package','key','index','productId'];
  public columnsToDisplay : string[] = [ ... this.displayedColumns, 'actions']
  modulels: Modulel[] = []
  public columnsFilters = {}
  public dataSource  : MatTableDataSource<Modulel>

  constructor(private router: Router,
    private Activatedroute: ActivatedRoute, 

    private service: ModulelService,
     public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<Modulel>();
  }

  // error kan f modulels kan khasha s o this.modules = modulels bla this ok ok chokran bzf baslama
  ngOnInit(): void {
    this.service.getAll().subscribe((modulels) => (
      this.modulels = modulels,
      this.dataSource = new MatTableDataSource(this.modulels),
      this.dataSource.paginator = this.paginator,
      this.dataSource.sort = this.sort
    ))
  }

  onEdit(id: string): void {
    this.router.navigate(['modulel/edit', id]);
  }
  openDialog(module: Modulel){
    let dialogRef = this.dialog.open(DeleteComponent, {data: { modalTitle: `${module.name}`}})
    dialogRef.afterClosed().subscribe(confirm => {
      if(confirm) {
        this.service.delete(module).subscribe(() => {
          this.modulels = this.modulels.filter((t) => t.id !== module.id)
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
    console.log(this.modulels)
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      
     
    }
  }

}
