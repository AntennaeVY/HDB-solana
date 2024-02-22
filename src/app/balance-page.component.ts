import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';
import { TransactionsSectionComponent } from './transactions-section.component';

@Component({
  selector: 'solana-bootcamp-balance-page',
  template: `
    <div class="flex justify-center gap-4">
      <solana-bootcamp-balance-section></solana-bootcamp-balance-section>

      <solana-bootcamp-transactions-section></solana-bootcamp-transactions-section>
    </div>
  `,
  standalone: true,
  imports: [BalanceSectionComponent, TransactionsSectionComponent],
})
export class BalancePageComponent {}
