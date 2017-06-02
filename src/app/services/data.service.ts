import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class DataService
{
    private serviceUrl: string = "http://localhost:36810/"
    constructor(private http: Http){

    }

    getProducts()
    {
        var token = localStorage.getItem('fc.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`); Headers
        let options = new RequestOptions({ headers: headers });
        
        return this.http
            .get(this.serviceUrl + 'v1/products', options)
            .map((res: Response) => res.json());
    }

    authenticate(data: any){
        var dt = "grant_type=password&username=" +data.username + "&password=" + data.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.serviceUrl + 'token', dt, options).map((res: Response) => res.json());
    }


}