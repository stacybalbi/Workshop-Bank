import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/cards-service/card.service';
import { cards } from 'src/app/shared/models/cards.models';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  cards!: cards[];

  constructor(private cardservice: CardService) { }

  ngOnInit(): void {
    this.getCard();
  }

  getCard(){
    this.cardservice.list().subscribe(datos => this.cards = datos);
  }

  delete(cardId: number){
    this.cardservice.remove(cardId).subscribe(data =>{
      alert("card successfully removed");
      this.getCard();
    }, () =>{
      alert('error deleting card')
    }
    )

  }
}
