import { Component } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { HeroSectionComponent } from './hero-section.component';
import { TransactionsSectionComponent } from './transaction-section.component';

@Component({
  selector: 'solana-bootcamp-home-page',
  template: `
    <solana-bootcamp-transactions-section />
    <solana-bootcamp-hero-section />
    <solana-bootcamp-features-section />
  `,
  standalone: true,
  imports: [
    FeaturesSectionComponent,
    HeroSectionComponent,
    TransactionsSectionComponent,
  ],
})
export class HomePageComponent {}
