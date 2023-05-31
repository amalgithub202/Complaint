import { Component } from '@angular/core';
import { License } from '../license';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LicenseService } from '../license.service';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,finalize, map, startWith, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common'; //import de module datepipe
import { CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DatePipe],
})
export class EditComponent {

  public editedObject:License={} as License;
  public dataId: number| undefined;
  public myData: any;
  license: License[] = [];

  licenseKey: string | undefined;

  form!: FormGroup;
  
 

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
    private datePipe: DatePipe,//injecter Datepipe dans le constructor
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
    this.form = this.formBuilder.group({
      id:[0],
      keyLicense:['',Validators.required],
      product: [null,Validators.required],
      productId:[0],
      algorithm:['',Validators.required],//must be the same name in the form group
      //dateFrom: ['', Validators.required],dateTo: ['', Validators.required],
      dateFrom: [new Date(), Validators.required],
      dateTo: [new Date(), Validators.required],
    })

    this.initialize();

      this.fileredProduct  =  this.form.get('product')?.valueChanges
        .pipe(
          startWith(''),
          switchMap(value => this.filterPro(value))
        );
        
   }
  //  algorithmm = this.form.get('algorithm')?.value;

   //function for generate key license inside save 

  //  generatedLicenseKey = this.generateLicenseKey()
   save(){
    console.log(this.form)
   }
  //  public save() {
  //   console.log("reactive form submitted");
  //   console.log(this.form);
  //   this.submitted = true;
  
  //   if (this.form.invalid) { 
  //     return;
  //   }
  
  //   const formData: any = this.form.value;
  //   const generatedLicenseKey = this.generateLicenseKey();

  //   /*const dateFrom = this.form.get('dateFrom')?.value;
  //   const formaterDateFrom = this.datePipe.transform(dateFrom, 'dd/MM/yyyy');
    
  //   const dateTo = this.form.get('dateTo')?.value;
  //   const formaterDateTo = dateTo ? this.datePipe.transform(dateTo, 'dd/MM/yyyy') : '';*/

  //   //c'est le model avec le quelle en envoi les données -> backend
  //   const model: License = {
  //     id: formData.id,
  //     licenseKey: '', // We will generate the license key
  //     productId: formData.product?.id,
  //     algorithm: formData.generatedLicenseKey.algorithm,
  //     dateFrom: new Date(formData.dateFrom),
  //     dateTo: new Date(formData.dateTo),
  //   };
  
  //   const addedLicense = generatedLicenseKey;
  //   console.log(addedLicense)
  //   console.log(model.algorithm)
  //   this.loading = true;
  
  //   if (!this.isAddMode) {
  //     this.service.update(model).subscribe({
  //       next: () => {
  //         this.service.success('License updated', true);
  //         this.router.navigate(['/license'], { relativeTo: this.Activatedroute });
  //       },
  //       error: (error) => {
  //         this.service.error(error);
  //         this.loading = false;
  //       },
  //     });
  //   } else { 
  //     debugger;
  //     this.service.add(addedLicense).subscribe({
  //       next: (addedLicense: License) => { debugger;
  //         // const generatedLicenseKey = this.generateLicenseKey();
          

  
  //         this.service.update(addedLicense).subscribe({
  //           next: () => {
  //             this.service.success('License added', true);
  //             this.router.navigate(['/license'], { relativeTo: this.Activatedroute });
  //           },
  //           error: (error) => {
  //             this.service.error(error);
  //             this.loading = false;
  //           },
  //         });
  //       },
  //       error: (error) => {
  //         this.service.error(error);
  //         this.loading = false;
  //       },
  //     });
  //   }  
  // }

  // date= Date.parse
  
  public generateLicenseKey() {

    const formDatab: any = {
       algorithm : this.form.get('algorithm')?.value,
       dateFrom : this.form.get('dateFrom')?.value ?? new Date(),
       dateTo : this.form.get('dateTo')?.value ?? new Date(),
       product : this.form.get('product')?.value,
      //  day : this.form.get('dateFrom')?.getDate(),
      //  year : dateTo?.getFullYear(),
      //  firstTwoLetters : algorithm?.substring(0, 2),
      //  yearDifference : dateTo.getFullYear() - new Date(dateFrom).getFullYear(),
    }
   

    // const formData: any = this.form.value;
    // const model: License = {
    //   id: formData.id,
    //   licenseKey: '', // We will generate the license key
    //   productId: formData.product?.id,
    //   algorithm: formData.generatedLicenseKey.algorithm,
    //   dateFrom: new Date(formData.dateFrom),
    //   dateTo: new Date(formData.dateTo),
    // };
  

   // const formaterDateFrom = this.datePipe.transform(dateFrom, 'dd/MM/yyyy');//la methode transforme permet de transformer la dateFrom selon le format q'on la donner entre les cotes
    //  const dateTo = this.form.get('dateTo')?.value;
    //const dateFrom = this.form.get('dateFrom')?.value;
   // const formaterDateTo = this.datePipe.transform(dateTo, 'dd/MM/yyyy');   const year = dateFrom?.getFullYear(); pour prendre just l'années dans dateFrom
    //c'est une variable qui vas stoker l'operation sur les années
    //pour prendre tout la date et les converture en string  dateFrom?.toLocaleDateString()  dateTo?.toLocaleDateString()
    

    // mélanger les valuers
    // // const licenseKey = '%%'+ firstTwoLetters + '#' + algorithm + '%' + product + '$$' + algorithm + '-%' + day + '$$' + yearDifference + '/$' + year ;
  
    // Display the generated license key in the console
    // console.log('Generated License Key:', licenseKey);
  
    return formDatab;
  }
  

}
