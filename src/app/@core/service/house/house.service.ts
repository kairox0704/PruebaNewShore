import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Ruta } from '../../../../environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private Http: HttpClient) { }

  URL = `${Ruta}house`;

  
  getMembersPerHouse(House:String){
    console.log(`${this.URL}/${House}`)
    return this.Http.get(`${this.URL}/${House}`)
      .pipe(
        map((res:any)=>{
          return res || null
        }),
      );
  }
}
