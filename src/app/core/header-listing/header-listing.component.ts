import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-listing',
  templateUrl: './header-listing.component.html',
  styleUrls: ['./header-listing.component.css']
})
export class HeaderListingComponent implements OnInit {

  @Input() title!: string;
  @Input() baseUrl!: string;

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  @Output() searchAction = new EventEmitter<any>();


  search($event:any) {
    this.searchAction.emit(event);
  }
  @Output() export = new EventEmitter<any>()

  openPDF($event: any){
    this.export.emit(event);
  }

  toCreate(){
    this.router.navigate([this.baseUrl,'create']);
  }

  toExport(){
    this.router.navigate([this.baseUrl,'export']);
  }

}
