import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url = "SuperHero";

  constructor( private http: HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]>{

    return this.http.get<SuperHero[]>('https://localhost:7044/api/SuperHero');

  }

  public updateHero(hero: SuperHero) : Observable<SuperHero[]>{

    return this.http.put<SuperHero[]>('https://localhost:7044/api/SuperHero', hero);

  }

  public createHero(hero: SuperHero) : Observable<SuperHero[]>{

    return this.http.post<SuperHero[]>('https://localhost:7044/api/SuperHero', hero);

  }

  public deleteSuperHero(hero: SuperHero) : Observable<SuperHero[]>{

    return this.http.delete<SuperHero[]>('https://localhost:7044/api/SuperHero/'+hero.id);

  }
}
