import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, map, Observable, startWith, switchMap } from 'rxjs';
import { Customer } from 'src/app/customer/customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { Employe } from 'src/app/employe/employe';
import { EmployeService } from 'src/app/employe/employe.service';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';
import { Status } from 'src/app/status/status';
import { StatusService } from 'src/app/status/status.service';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public editedObject:Complaint = {} as Complaint;

  editedId: number | undefined;
  isAddMode: boolean =true;

  form = this.formBuilder.group({
    id: [0],
    content: ['', Validators.required],
    customer: [null,Validators.required],
    employe: [null,Validators.required],
    employeId: [0],
    status: [null,Validators.required],
    product: [null,Validators.required],
    productId: [0],
    statusId: [0]
  })

  loading= false ;
  submitted= false;

  fileredCustomer: Observable<Customer[]>|undefined;
  customers!: Observable<Customer[]>;
 
  fileredEmployee: Observable<Employe[]> | undefined;
  employees!: Observable<Employe[]>;
  
  fileredProduct: Observable<Product[]> | undefined;
  products!: Observable<Product[]>;

  fileredStatus: Observable<Status[]> | undefined;
  statuss!: Observable<Status[]>;

  constructor(
    private service: ComplaintService,
    private customerService: CustomerService,
    private employeeService: EmployeService,
    private productService: ProductService,
    private statusService: StatusService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.editedId=params['id'];
      this.isAddMode = !this.editedId;
    });
  }

  ngOnInit(): void {

    this.initialize();

    this.fileredCustomer  =  this.form.get('customer')?.valueChanges
      .pipe(
        startWith(''),
        switchMap(value => this.filterCus(value))
      );

      this.fileredEmployee  =  this.form.get('employe')?.valueChanges
      .pipe(
        startWith(''),
        switchMap(value => this.filterEmp(value))
      );

    this.fileredStatus  =  this.form.get('status')?.valueChanges
    .pipe(
      startWith(''),
      switchMap(value => this.filterSta(value))
    );

    this.fileredProduct  =  this.form.get('product')?.valueChanges
    .pipe(
      startWith(''),
      switchMap(value => this.filterPro(value))
    );

  }

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
  public filterEmp(value: any){
    let filterValue = '';
    if(value){
     filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLocaleLowerCase();
      return this.employees.pipe(
        map(emp => emp.filter(employe => employe.id)))
    }
    else {
      return [];
    }
  }

  public filterSta(value: any){
    let filterValue = '';
    if(value){
      return this.statuss.pipe(
        map(sta => sta.filter(status => status.id)))
    }
    else {
      return [];
    }
  }

  public filterPro(value: any){
    let filterValue = '';
    if(value){
      return this.products.pipe(
        map(pro => pro.filter(product => product.id)))
    }
    else {
      return [];
    }
  }


  public displayFn(customer?: any): any {
    return customer ? customer.name : "";
  }
  public displayEmp(employe?: any): any {
    return employe ? employe.name : "";
  }
  public displaysta(status?:any):any {
    return status ? status.name : "";
  }
  public displaypro(product?:any):any {
    return product ? product.name : "";
  }




 public initialize(){


  this.customers = this.customerService.getAll();
  this.employees = this.employeeService.getAll();
  this.products = this.productService.getAll();
  this.statuss = this.statusService.getAll();


  if(this.editedId){
    this.loading=true
    this.service.getById(this.editedId)
    .pipe(
      finalize(()=>this.loading=false)
    )
    .subscribe((data: any) => {
      this.editedObject = data;
      this.form.patchValue(data);
      this.customerService.getById(data.customerId).pipe(
        finalize(()=>this.loading=false)
      ).subscribe((result:Customer | any) => {
        this.form.controls["customer"]?.setValue(result);
        console.log(result);
      });
      this.employeeService.getById(data.employeId).pipe(
        finalize(()=>this.loading=false)
      ).subscribe((result: Employe|any) => {
        this.form.controls["employe"]?.setValue(result);
      });
      this.statusService.getById(data.statusId).pipe(
        finalize(()=>this.loading=false)
      ).subscribe((result:Status | any) => {
        this.form.controls["statusId"]?.setValue(result);
        console.log(result);
      });
      this.productService.getById(data.productId).pipe(
        finalize(()=>this.loading=false)
      ).subscribe((result:Product | any) => {
        this.form.controls["productId"]?.setValue(result);
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
    let model: Complaint = {
     id:formData.id,
     content: formData.content,
     customerName: formData?.customer?.name,
     customerId: formData.customer?.id,
     employeName: formData.employe?.name,
     employeId: formData.employe?.id,
     productName: formData.product?.name,
     productId: formData.product?.id,
     statusName: formData.status?.name,
     statusId: formData.status?.id
    };

    this.loading = true
      if(!this.isAddMode){
        this.service.update(model).subscribe({ next: () => {
          this.service.success('User update', true )
          this.router.navigate(['/complaint'], { relativeTo: this.activatedRoute})
        },
        // this.service.update(model).subscribe({ next: () => {
        //   this.service.success('User update', true )
        //   this.router.navigate(['/reclamation'], { relativeTo: this.activatedRoute})
        // },
        error: error => {
          this.service.error(error)
          this.loading = false
        }
        })
      }
      else{
        this.service.add(model).subscribe({next: () => {
          this.service.success('User added', true )
          this.router.navigate(['/complaint'], { relativeTo: this.activatedRoute})
        },
        error: error => {
          this.service.error(error)
          this.loading = false
        }
      })
    }
  }
}
