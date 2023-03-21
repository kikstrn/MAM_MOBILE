import { Component, OnInit } from '@angular/core';
import { DataGame } from './model/game.model';
import { GameService } from './service/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  popularGames = new DataGame();
  recentlyReleased = new DataGame();
  mostAnticipated = new DataGame();
  nextRelease = new DataGame();
  
  constructor(private readonly gameService: GameService) { }

  ngOnInit() :void {
    this.gameService.popularGames().subscribe({
      next: (dataGame: DataGame) => {
        if (dataGame != undefined) this.popularGames = Object.assign(new DataGame(), dataGame);
        console.log(dataGame)
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });

    this.gameService.recentlyReleased().subscribe({
      next: (dataGame: DataGame) => {
        if (dataGame != undefined) this.recentlyReleased = Object.assign(new DataGame(), dataGame);
        console.log(dataGame)
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });

    this.gameService.mostAnticipated().subscribe({
      next: (dataGame: DataGame) => {
        if (dataGame != undefined) this.mostAnticipated = Object.assign(new DataGame(), dataGame);
        console.log(dataGame)
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });

    this.gameService.nextRelease().subscribe({
      next: (dataGame: DataGame) => {
        if (dataGame != undefined) this.nextRelease = Object.assign(new DataGame(), dataGame);
        console.log(dataGame)
      },
      complete: () => { },
      error: (error) => { console.log(error) }
    });
  }

}
