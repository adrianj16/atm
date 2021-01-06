import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CardService {

  private validateCardURL = 'api/heroes';  // URL to web api
  private validatePINURL = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** POST: add a new hero to the server */
  validateCard(card_number: string): any {
    return this.http.post(this.validateCardURL, {"NumeroTarjeta": card_number}, this.httpOptions);
  }
  validatePIN(card: any): any {
    return this.http.post(this.validatePINURL, card, this.httpOptions);
  }

  saveOperation(operation: any): any {
    return this.http.post(this.validatePINURL, {
      "card_id": localStorage.getItem("card_id"),
      "TarjetaId": operation.tipoOperacionId,
      "cantidad": operation.cantidad
    }, this.httpOptions);
  }

  getAccountDetail(card_id: any): any {
    // return this.http.post(this.validatePINURL, {"card_id": card_id}, this.httpOptions);
    return {
      "saldo": 3000.0,
      "operacion": [
        {
          "id": 1,
          "cantidad": 5000.0,
          "fecha": "2003-05-03T21:02:44",
          "tipoOperacionId": 3,
          "nombreOperacion" : "Deposito",
          "tarjetaId": 1
        },
        {
          "id": 2,
          "cantidad": -1000.0,
          "fecha": "2003-05-03T21:02:44",
          "tipoOperacionId": 2,
          "nombreOperacion" : "Retiro",
          "tarjetaId": 1
        },
        {
          "id": 3,
          "cantidad": -1000.0,
          "fecha": "2003-05-03T21:02:44",
          "tipoOperacionId": 2,
          "nombreOperacion" : "Retiro",
          "tarjetaId": 1
        },
        {
          "id": 4,
          "cantidad": 3000.0,
          "fecha": "2003-05-03T21:02:44",
          "tipoOperacionId": 1,
          "nombreOperacion" : "Consulta",
          "tarjetaId": 1
        }
      ]
    }
  }
}