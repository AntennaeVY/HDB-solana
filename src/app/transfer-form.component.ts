import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

interface TransferFormModel {
  memo: string | null;
  amount: number | null;
  receiverAddress: string | null;
}

export interface TransferFormPayload {
  memo: string;
  amount: number;
  receiverAddress: string;
}

@Component({
  selector: 'solana-bootcamp-transfer-form',
  template: ` <form
    #form="ngForm"
    class="w-[400px]"
    (ngSubmit)="onSubmit(form)"
  >
    <mat-form-field appearance="fill" class="w-full mb-4">
      <mat-label>Memo</mat-label>
      <input
        #memoControl="ngModel"
        name="memo"
        type="text"
        placeholder="a note to the sender..."
        [(ngModel)]="model.memo"
        matInput
        required
      />
      <mat-icon matSuffix>description</mat-icon>

      @if (form.submitted && memoControl.errors) {
        <mat-error>
          @if (memoControl.errors['required']) {
            Memo is required
          }
        </mat-error>
      } @else {
        <mat-hint>Should be the reason of the transfer</mat-hint>
      }
    </mat-form-field>
    <mat-form-field appearance="fill" class="w-full mb-4">
      <mat-label>Amount</mat-label>
      <input
        #amountControl="ngModel"
        name="amount"
        type="number"
        min="0"
        placeholder="the amount to send..."
        [(ngModel)]="model.amount"
        matInput
        required
      />
      <mat-icon matSuffix>attach_money</mat-icon>

      @if (form.submitted && amountControl.errors) {
        <mat-error>
          @if (amountControl.errors['required']) {
            Amount is required
          } @else if (amountControl.errors['min']) {
            Amount must be greater than 0
          }
        </mat-error>
      } @else {
        <mat-hint>Should be the positive amount to be sent</mat-hint>
      }
    </mat-form-field>
    <mat-form-field appearance="fill" class="w-full mb-4">
      <mat-label>Receiver address</mat-label>
      <input
        #receiverAddressControl="ngModel"
        name="receiverAddress"
        type="text"
        placeholder="receiver public key..."
        [(ngModel)]="model.receiverAddress"
        matInput
        required
      />
      <mat-icon matSuffix>key</mat-icon>

      @if (form.submitted && receiverAddressControl.errors) {
        <mat-error>
          @if (receiverAddressControl.errors['required']) {
            Receiver address is required
          }
        </mat-error>
      } @else {
        <mat-hint>Should be the address of the receiver</mat-hint>
      }
    </mat-form-field>

    <footer class="flex justify-center">
      <button type="submit" mat-raised-button color="primary">Send</button>
    </footer>
  </form>`,
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInput, MatIcon, MatButton],
})
export class TransferFormComponent {
  readonly model: TransferFormModel = {
    memo: null,
    amount: null,
    receiverAddress: null,
  };

  @Output() readonly submitForm = new EventEmitter<TransferFormPayload>();

  onSubmit(form: NgForm) {
    if (
      form.invalid ||
      this.model.amount == null ||
      this.model.memo == null ||
      this.model.receiverAddress == null
    )
      console.error('Invalid form');
    else this.submitForm.emit(this.model as TransferFormPayload);
  }
}
