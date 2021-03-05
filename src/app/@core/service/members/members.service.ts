import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Ruta } from '../../../../environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private Http: HttpClient) { }

  URL = `${Ruta}`;

  getAll(){
    return this.Http.get(this.URL)//.subscribe(data => {console.log(data)})
      .pipe(
        map((res:any)=>{
          return res || null
        }),
      );
  };

}