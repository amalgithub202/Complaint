export interface License {
    id?:number;
    productId?:number;
    licenseKey:string;
    algorithm:string;
    dateFrom:string;
    dateTo:string;
}