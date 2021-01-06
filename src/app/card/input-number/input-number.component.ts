import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  constructor(private router: Router, private cardService: CardService) { }

  card_number = ""

  ngOnInit(): void {
  }

  confirm(){
    if (!this.card_number) { return; }
    this.cardService.validateCard(this.card_number).subscribe(
      (response) => {      
        console.log(response);                     
        if(response.Estado){
          localStorage.setItem("card_id", response.id)
          this.router.navigate(['/card/pin']);
        } else {
          this.router.navigate(['/error']);
          localStorage.setItem("mensaje", "La tarjeta ingresada se encuentra bloqueada");
        }
      },
      (error) => {       
        console.log(error);                        
        if(error.status == 404){
          this.router.navigate(['/error']);
          localStorage.setItem("mensaje", "La tarjeta ingresada no existe");
        }
      }
    )
  }

  insertNumber(number) {
    if (this.card_number.length < 19) {
      this.card_number += number;
      if(this.card_number.length <18){
      this.card_number = this.card_number
        .replace(/\W/gi, '')
        .replace(/(.{4})/g, '$1-')
        .trim()
      }
    }
  }

  clear() {
    this.card_number = "";
  }

  cancel() {
    this.card_number = "";
  }

}
