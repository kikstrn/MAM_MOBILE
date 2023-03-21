import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DataGame, Game } from '../model/game.model';

@Injectable()
export class GameService {

    API_URL = environment.API_URL;

    constructor(private http: HttpClient) {}

    findAll(url: string = '/games/'): Observable<DataGame>{
        return (this.http.get<DataGame>(`${this.API_URL}${url}`));
    }
    findById(id: string, url: string = '/games/info/'): Observable<Game>{
        return this.http.get<Game>(`${this.API_URL}${url}${id}`);
    }
    popularGames(url: string = '/games/popular-games?limit=28'): Observable<DataGame>{
        return this.http.get<DataGame>(`${this.API_URL}${url}`);
    }
    nextRelease(url: string = '/games/next-release?limit=20'): Observable<DataGame>{
        return this.http.get<DataGame>(`${this.API_URL}${url}`);
    }
    recentlyReleased(url: string = '/games/recently-released?limit=20'): Observable<DataGame>{
        return this.http.get<DataGame>(`${this.API_URL}${url}`);
    }
    mostAnticipated(url: string = '/games/most-anticipated?limit=20'): Observable<DataGame>{
        return this.http.get<DataGame>(`${this.API_URL}${url}`);
    }
    searchGames(game : string,url: string = '/games/search?game='): Observable<DataGame>{
        return this.http.get<DataGame>(`${this.API_URL}${url}${game}`);
    }
}