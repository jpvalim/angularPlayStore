import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {
  @Input() gameType:String="Digital PS4";
  @Input() gamePrice:String="R$ 399,90";

}
