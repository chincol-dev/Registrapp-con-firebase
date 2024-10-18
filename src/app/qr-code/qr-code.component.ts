import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  standalone: true,
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnChanges {
  @Input() value: string;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.generateQRCode();
    }
  }

  private async generateQRCode() {
    try {
      await QRCode.toCanvas(this.canvas.nativeElement, this.value, {
        width: 256,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      });
    } catch (error) {
      console.error('Error generating QR code', error);
    }
  }
}
