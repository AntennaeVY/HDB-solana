import { Component } from '@angular/core';

@Component({
  selector: 'solana-bootcamp-features-section',
  template: `
    <section class="p-16">
      <ul class="flex justify-center items-center gap-4">
        <li>Rapido</li>
        <li>Eficient</li>
        <li>Seguro</li>
      </ul>
    </section>
  `,
  standalone: true,
})
export class FeaturesSectionComponent {}