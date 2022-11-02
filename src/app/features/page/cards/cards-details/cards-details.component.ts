import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/cards-service/card.service';
import { cardType } from 'src/app/core/enums/creditCard.enum';
import { cards } from 'src/app/shared/models/cards.models';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss']
})

export class CardsDetailsComponent implements OnInit {

  DatosCards! : cards;
  type!: cardType;
  Type: string="";



  constructor(
    private activateRouter: ActivatedRoute,
    private service: CardService,
    
  ) { }

//   ChangeEnums(){
//     // if (this.DatosCards.status === 1){
//     //   this.Type = "VISA";
//     // }
//     // else{
//     //   this.Type = "Mastercard";
//     // }
//    this.Type = this.DatosCards.status ===1 ? "VISA" : "Mastercard";

//  }

ngOnInit() {
    let UserAccount = this.activateRouter.snapshot.paramMap.get('id');
    console.log(UserAccount);
    this.service.loadById(UserAccount).subscribe(data => {
      this.DatosCards = data;
      console.log(data);
   // this.ChangeEnums();

  });
  }



}
