import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { first,finalize, map, Observable, startWith, switchMap } from 'rxjs';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { Customer } from 'src/app/customer/customer';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public editedObject:Employe={} as Employe;
  public dataId: number| undefined;//edited id 
  public myData: any;
  employees: Employe[] = [];
 //   form!: FormGroup;
 form = this.formBuilder.group({
    id:[0],
    name:['',Validators.required],
    custumorId:[0]
  })
 
  isAddMode: boolean | undefined;
  loading= false ;
  submitted= false;
  id: any;

  fileredCustomer: Observable<Customer[]>|undefined;
  customers!: Observable<Customer[]>;
  

  constructor(
    private service: EmployeService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private Activatedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.initialize();

   /*this.id = this.Activatedroute.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.Activatedroute.paramMap.subscribe((params: Params) => {
      this.dataId = params['get']('dataid');*/

      this.fileredCustomer  =  this.form.get('customer')?.valueChanges
        .pipe(
          startWith(''),
          switchMap(value => this.filterCus(value))
        );

     /* if(this.dataId){
        this.service.getById(this.dataId!).subscribe((data: any) => {
          this.myData = data;
          this.editedObject= data
        })})
      }*/
  
  /*  if(!this.isAddMode){
      this.service.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));
    }
  }*/

  public filterCus(value: any){
    let filterValue = '';
    if(value){
      filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLocaleLowerCase();
      return this.customers.pipe(
        map(cuss => cuss.filter(customer => customer.id)))
    }
    else {
      return [];
    }
  }
  public displayFn(customer?: any): any {
    return customer ? customer.id : "";
  }
  public initialize(){
    
    this.customers = this.customerService.getAll();
    if(this. dataId){
      this.loading=true
      this.service.getById(this. dataId)
      .pipe(
        finalize(()=>this.loading=false)
      )
      .subscribe((data: any) => {
        this.editedObject = data;
        this.form.patchValue(data);
        this.customerService.getById(data.customerId).pipe(
          finalize(()=>this.loading=false)
        ).subscribe((result:Customer | any) => {
          this.form.controls["custumorId"]?.setValue(result);
          console.log(result);
        });
      })
    }
   }

  public save(){
    console.log("reactive form sumbitted")
    console.log(this.form);
    this.submitted = true;

    if(this.form.invalid){
      return;
    }
    let formData:any=this.form.value;
    let model: Employe = {
     id:formData.id,
     name: formData.name,
     customerId: formData.customer?.id,
     
    };
    this.loading = true
      if(!this.isAddMode){
        this.service.update(model).pipe(first()).subscribe({ next: () => {
              this.service.success('User update', true )
              this.router.navigate(['/employee'], { relativeTo: this.Activatedroute})
            },
            error: error => {
              this.service.error(error)
              this.loading = false
            }
          })
      }
    else{
      this.service.add(model).pipe(first()).subscribe({next: () => {
          this.service.success('User added', true )
          this.router.navigate(['/employee'], { relativeTo: this.Activatedroute})
        },
       error: error => {
          this.service.error(error)
          this.loading = false
        }
      })
    }
  }
}
/*
Original Code
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { first } from 'rxjs';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public editedObject:Employe={} as Employe;
  public dataId: number| undefined;
  public myData: any;
  employees: Employe[] = [];
  form!: FormGroup;

  isAddMode: boolean | undefined;
  loading= false ;
  submitted= false;
  id: any;

  constructor(
    private service: EmployeService,
    private formBuilder: FormBuilder,
    private Activatedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required]
    })
    this.id = this.Activatedroute.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.Activatedroute.paramMap.subscribe((params: Params) => {
      this.dataId = params['get']('dataid');
      if(this.dataId){
        this.service.getById(this.dataId!).subscribe((data: any) => {
          this.myData = data;
          this.editedObject= data
        })
      }
    })
    if(!this.isAddMode){
      this.service.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));
    }
  }

  public save(){
    console.log("reactive form sumbitted")
    console.log(this.form);
    this.submitted = true;

    if(this.form.invalid){
      return;
    }
    this.loading = true
      if(!this.isAddMode){
        this.service.update(this.form.value).pipe(first()).subscribe({ next: () => {
              this.service.success('User update', true )
              this.router.navigate(['/employee'], { relativeTo: this.Activatedroute})
            },
            error: error => {
              this.service.error(error)
              this.loading = false
            }
          })
      }
    else{
      this.service.add(this.form.value).pipe(first()).subscribe({next: () => {
          this.service.success('User added', true )
          this.router.navigate(['/employee'], { relativeTo: this.Activatedroute})
        },
       error: error => {
          this.service.error(error)
          this.loading = false
        }
      })
    }
  }
}

fin code*/