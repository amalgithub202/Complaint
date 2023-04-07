import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { first } from 'rxjs';
import { Status } from '../status';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public editedObject:Status={} as Status;
  public dataId: number| undefined;
  public myData: any;
  status: Status[] = [];
  form!: FormGroup;
  isAddMode: boolean | undefined;
  loading= false ;
  submitted= false;
  id: any;

  constructor(
    private service: StatusService,
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
              this.router.navigate(['/status'], { relativeTo: this.Activatedroute})
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
          this.router.navigate(['/status'], { relativeTo: this.Activatedroute})
        },
       error: error => {
          this.service.error(error)
          this.loading = false
        }
      })
    }
  }


}
