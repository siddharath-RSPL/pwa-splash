import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  title = 'QRCode-scan';
  click: any = false
  resultString: any
  userClick() {
    this.click = true
  }
  //Scans the QR code
  onCodeResult(resultString: string) {
    return this.resultString = resultString
  }
  weekendsDatesFilter = (d: Date): boolean => {
    const day = d.getDay();

    /* Prevent Saturday and Sunday for select. */
    return day !== 0 && day !== 6 ;
}

}
