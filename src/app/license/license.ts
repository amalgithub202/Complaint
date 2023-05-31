//import { DatePipe } from "@angular/common";

export interface License {
    id?:number;
    productId?:number;
    licenseKey:string;
    algorithm:string;
    dateFrom:Date;
    dateTo:Date;
}