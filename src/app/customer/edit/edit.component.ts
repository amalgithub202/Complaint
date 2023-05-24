import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { first } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  public editedObject:Customer={} as Customer;
  public dataId: number| undefined;
  public myData: any;

  customers: Customer[] = [];
  customerForm!: FormGroup;
  isAddMode: boolean | undefined;
  loading= false ;
  submitted= false;
  id: any;

  constructor(
    private service: CustomerService,
    private formBuilder: FormBuilder,
    private Activatedroute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(){
    this.customerForm = this.formBuilder.group({
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
      this.service.getById(this.id).pipe(first()).subscribe(x => this.customerForm.patchValue(x));
    }
  }
  get f() {return this.customerForm.controls;}


  public save(){
    console.log("reactive form sumbitted")
    console.log(this.customerForm);
    this.submitted = true;

    if(this.customerForm.invalid){
      return;
    }
    this.loading = true
      if(!this.isAddMode){
        this.service.update(this.customerForm.value).pipe(first()).subscribe({ next: () => {
              this.service.success('User update', true )
              this.router.navigate(['/customer'], { relativeTo: this.Activatedroute})
            },
            error: error => {
              this.service.error(error)
              this.loading = false
            }
          })
      }
    else{ 
      this.service.add(this.customerForm.value).pipe(first()).subscribe({next: () => {
          this.service.success('User added', true )
          this.router.navigate(['/customer'], { relativeTo: this.Activatedroute})
        },
       error: error => {
          this.service.error(error)
          this.loading = false
        }
      })
    }
  }




}
