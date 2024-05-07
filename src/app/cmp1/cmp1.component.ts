import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  standalone: true,
  imports: [],
  templateUrl: './cmp1.component.html',
  styleUrl: './cmp1.component.css'
})
export class Cmp1Component {

}
export class Player
{
name:string;
dice_value:number=0;
constructor(name:string)
{
this.name=name;
}
}
export namespace game
{
  export function roll_dice(player: Player) {
    player.dice_value = Math.ceil(Math.random() * 6);
  }
}
