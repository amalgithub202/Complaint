import { Component } from '@angular/core';
import { License } from '../license';
import {  FormBuilder, Validators } from '@angular/forms';
import { LicenseService } from '../license.service';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,finalize, map, startWith, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public editedObject:License={} as License;
  public dataId: number| undefined;
  public myData: any;
  license: License[] = [];

  licenseKey: string | undefined;

  
 form = this.formBuilder.group({
    id:[0],
    keyLicense:['',Validators.required],
    product: [null,Validators.required],
    productId:[0],
    algorithm:['',Validators.required],//must be the same name in the form group
    formFrom: ['', Validators.required],
    formTo: ['', Validators.required],
  })

  isAddMode: boolean | undefined;
  loading= false ;
  submitted= false;
  id: any;

  fileredProduct: Observable<Product[]>|undefined;
  products!: Observable<Product[]>;

  constructor(
    private service: LicenseService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private Activatedroute: ActivatedRoute,
    private router: Router) {
      this.Activatedroute.params.subscribe((params) => {
      this.dataId=params['id'];
      this.isAddMode = !this.dataId;
    });
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
  public displaypro(product?:any):any {
    return product ? product.name : "";
  }
  public initialize(){
    
    this.products = this.productService.getAll();

    if(this. dataId){
      this.loading=true
      this.service.getById(this. dataId)
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

   ngOnInit(): void {

    this.initialize();

      this.fileredProduct  =  this.form.get('product')?.valueChanges
        .pipe(
          startWith(''),
          switchMap(value => this.filterPro(value))
        );
   }

   //function for generate key license inside save 

   public save() {
    console.log("reactive form submitted");
    console.log(this.form);
    this.submitted = true;
  
    if (this.form.invalid) {
      return;
    }
  
    const formData: any = this.form.value;
    const model: License = {
      id: formData.id,
      licenseKey: '', // We will generate the license key
      productId: formData.product?.id,
      algorithm: formData.algorithm,
      dateFrom: formData.formFrom.Date.parse,
      dateTo: formData.formTo,
    };
  
    console.log(this.form)
    this.loading = true;
  
    if (!this.isAddMode) {
      this.service.update(model).subscribe({
        next: () => {
          this.service.success('License updated', true);
          this.router.navigate(['/license'], { relativeTo: this.Activatedroute });
        },
        error: (error) => {
          this.service.error(error);
          this.loading = false;
        },
      });
    } else { 
      this.service.add(model).subscribe({
        next: (addedLicense: License) => {
          const generatedLicenseKey = this.generateLicenseKey();
          addedLicense.licenseKey = generatedLicenseKey;
  
          this.service.update(addedLicense).subscribe({
            next: () => {
              this.service.success('License added', true);
              this.router.navigate(['/license'], { relativeTo: this.Activatedroute });
            },
            error: (error) => {
              this.service.error(error);
              this.loading = false;
            },
          });
        },
        error: (error) => {
          this.service.error(error);
          this.loading = false;
        },
      });
    }
  }

  // date= Date.parse
  
 
  public generateLicenseKey() {
    const algorithm = this.form.get('algorithm')?.value;
    const dateFrom = this.form.get('dateFrom')?.value;
    const dateTo = this.form.get('dateTo')?.value;
    const product = this.form.get('product')?.value;
  
    // Shuffle the values
    const Values = algorithm+'-'+product+'$'+algorithm+'-'+dateFrom+'-'+dateTo;
  
    console.log(dateFrom)
    const licenseKey = Values;
  
    // Display the generated license key in the console
    console.log('Generated License Key:', licenseKey);
  
    return licenseKey;
  }
  

}
