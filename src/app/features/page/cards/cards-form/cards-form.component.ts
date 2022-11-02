import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from 'src/app/services/cards-service/card.service';
import { CardsDto } from 'src/app/shared/models/CreditCard/card-dto.models';
import { CardsDetailsComponent } from '../cards-details/cards-details.component';
import { Location} from '@angular/common';

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {
  
  public form : FormGroup = new FormGroup([]);
  constructor(private cardService: CardService, private location: Location) { }

  ngOnInit(): void {
  this.initializeForm();
  }

  private initializeForm(): void{
    this.form = new FormGroup(
      {
        cardNumber: new FormControl(''),
        cardType: new FormControl(0),
        ammount: new FormControl(0),
        balance: new FormControl(0),
        userId: new FormControl(0),
        status: new FormControl(0)
      }
    )
  }
  goBack() {
    this.location.back();
  }

  submit(){
    const createCard: CardsDto = {
      ...this.form.value
        
    } as CardsDto;

    this.cardService.create(createCard).subscribe(()=>{
      alert('credit card created');
      this.goBack();
    },()=>{
      alert('error creating credit card');
    }
    );
  }

  saveSelect(){
    

  }
} 
