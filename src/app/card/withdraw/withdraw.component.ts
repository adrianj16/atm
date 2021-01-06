import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private router: Router, private cardService: CardService) { }

  amount = "";
  setFlag = false;

  ngOnInit(): void {
  }

  confirm(){
    if (!this.amount) { return; }
    this.cardService.saveOperation({
      "tipoOperacionId": 2,
      "cantidad": parseInt(this.amount).toFixed(2)
    }).subscribe(
      (response) => {      
        this.router.navigate(['/card/home']);
      },
      (error) => {       
        this.router.navigate(['/error', { mensaje : "Imposible grabar operacion" }]);
      }
    )
  }

  insertNumber(number) {
    if(this.setFlag){
      this.setFlag = false;
      this.amount = ""+number;
    }else{
      this.amount += ""+number;
    }
  }

  setAmount(number) {
    this.setFlag = true;
    this.amount = number;
  }

  clear() {
    this.amount = "";
  }

  back() {
    this.router.navigate(['/card/home']);
  }

  cancel() {
    this.router.navigate(['/card/number']);
  }

}
