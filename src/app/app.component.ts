import { Component } from '@angular/core';
import { Player } from './cmp1/cmp1.component';
import { game } from './cmp1/cmp1.component'; // Import game namespace
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[FormsModule]
})
export class AppComponent {
  player1: Player;
  player2: Player;
  winner: string = '';

  constructor() {
    this.player1 = new Player("Pillu");
    this.player2 = new Player("Hanu");
    //this.startGame()
  }

  begin(){
    console.log(this.player1.name)
    console.log(this.player2.name)
  }


  startGame() {
    game.roll_dice(this.player1);
    game.roll_dice(this.player2);
    this.winner = this.getWinner(this.player1, this.player2);
  }

  getWinner(p1: Player, p2: Player): string {
    if (p1.dice_value > p2.dice_value) {
      return "Congratulations "+p1.name+"!!!\nYou Won!";
    } else if (p2.dice_value > p1.dice_value) {
      return "Congratulations "+p2.name+"!!!\nYou Won!";
    } else {
      return "Tough Competition...Draw Match!";
    }
  }
}
