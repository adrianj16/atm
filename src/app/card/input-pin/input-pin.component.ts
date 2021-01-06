import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-input-pin',
  templateUrl: './input-pin.component.html',
  styleUrls: ['./input-pin.component.css']
})
export class InputPinComponent implements OnInit {

  constructor(private router: Router, private cardService: CardService) { }

  card_pin = ""
  block_counter = 0;

  ngOnInit(): void {
  }

  confirm(){
    if (!this.card_pin) { return; }
    this.cardService.validatePIN(this.card_pin)
      .subscribe(result => {
        console.log(result.status);
        if(result.status == 404){
          this.block_counter++;
          if (this.block_counter > 3) {
            this.router.navigate(['/error', { message : "La tarjeta ingresada se encuentra bloqueada" }]);
          }
        }
        if(result.status == 200){
          if(result.data.Estado){
            this.block_counter = 0;
            this.router.navigate(['/card/home']);
          } else {
            this.router.navigate(['/error', { message : "La tarjeta ingresada se encuentra bloqueada" }]);
          }
        }
      });
    
  }

  insertNumber(number) {
    if (this.card_pin.length < 4) {
      this.card_pin += number;
    }
  }

  clear() {
    this.card_pin = "";
  }

  cancel() {
    this.router.navigate(['/card/number']);
  }

}
