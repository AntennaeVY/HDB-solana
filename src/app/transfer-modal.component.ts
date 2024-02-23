import { Component } from '@angular/core';
import { createTransferInstructions } from '@heavy-duty/spl-utils';
import { injectTransactionSender } from '@heavy-duty/wallet-adapter';
import {
  TransferFormComponent,
  TransferFormPayload,
} from './transfer-form.component';

@Component({
  selector: 'solana-bootcamp-transfer-modal',
  template: `
    <div class="px-8 pt-16 pb-8">
      <h2 class="text-3xl text-center mb-4">Transfer Funds</h2>
      <solana-bootcamp-transfer-form
        (submitForm)="onTransfer($event)"
      ></solana-bootcamp-transfer-form>
    </div>
  `,
  standalone: true,
  imports: [TransferFormComponent],
})
export class TransferModalComponent {
  private readonly _transactionSender = injectTransactionSender();

  onTransfer(payload: TransferFormPayload) {
    this._transactionSender
      .send(({ publicKey }) =>
        createTransferInstructions({
          amount: payload.amount,
          mintAddress: '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs',
          receiverAddress: payload.receiverAddress,
          senderAddress: publicKey.toBase58(),
          fundReceiver: true,
          memo: payload.memo,
        }),
      )
      .subscribe({
        next: (signature) => console.log(signature),
        error: (error) => console.log(error),
        complete: () => console.log('Completed'),
      });
  }
}
