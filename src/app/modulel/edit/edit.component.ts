import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { first } from 'rxjs';
import { finalize,map,Observable,startWith,switchMap } from 'rxjs';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';
import { Modulel } from '../modulel'; 
import { ModulelService } from '../modulel.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  public editedObject:Modulel={} as Modulel;
  public dataId: number| undefined;
  public myData: any;
  editedId: number | undefined;
  modulel: Modulel[] = [];
 // form!: FormGroup;
 form = this.formBuilder.group({
  id:[0],
  name:['',Validators.required],
  product:[''],
  productId:[0],
  package:['',Validators.required],
  key:['',Validators.required],
  index:[0]
 })

  isAddMode: boolean | undefined;
  loading= false ;
  submitted= false;
  id: any;


  constructor(
    private service: ModulelService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private Activatedroute: ActivatedRoute,
    private router: Router
  ) { 
    this.Activatedroute.params.subscribe((params) => {
      this.editedId=params['id'];
      this.isAddMode = !this.editedId;
    });
  }
     // declaration de l'objet du produit
     fileredProduct: Observable<Product[]>|undefined;
     Product!: Observable<Product[]>;
     
   
   ngOnInit(): void {
     this.initialize();
 
     this.fileredProduct  =  this.form.get('product')?.valueChanges
       .pipe(
         startWith(''),
         switchMap(value => this.filterPro(value))
       );
} 
       public filterPro(value: any){
        // let filterValue = '';
        if(value){
          // filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLocaleLowerCase();
          return this.Product.pipe(
            map(cuss => cuss.filter(product => product.id))
          )
    
          // return this.customers.filter(customer => customer.name.toLowerCase().includes(filterValue));
        }
        else {
          return [];
        }
      }
    
      public displayFn(product?: any): any {
        return product ? product.id : "";
      }
    
      public initialize(){
           
           this.Product = this.productService.getAll();
       
      
      
        if(this.editedId){
          this.loading=true
          this.service.getById(this.editedId)
          .pipe(
            finalize(()=>this.loading=false)
          )
          .subscribe((data: any) => {
            this.editedObject = data;
            this.form.patchValue(data);
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
        let model: Modulel = {
         id:formData.id,
         name: formData.name,
         productId: formData.product?.id,
         package:formData.package,
         key:formData.key,
         index:parseInt(formData.index),
         
        };
    
    
        this.loading = true
          if(!this.isAddMode){
            this.service.update(model).subscribe({ next: () => {
                  this.service.success('Model update', true )
                  this.router.navigate(['/modulel'], { relativeTo: this.Activatedroute})
                },
                error: error => {
                  this.service.error(error)
                  this.loading = false
                }
              })
          }
        else{ debugger;
          this.service.add(model).subscribe({next: () => { debugger;
              this.service.success('Model added', true )
              this.router.navigate(['/modulel'], { relativeTo: this.Activatedroute})
            },
           error: error => {
              this.service.error(error)
              this.loading = false
            }
          })
        }
      }

}
