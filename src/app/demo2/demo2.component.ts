import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {
  inputData: string = '0';
  result: string = '';

  onChange(value: string) {
    if (this.inputData === '0' || this.result !== '') {
      this.inputData = value;
      this.result = '';
      console.log(this.inputData);

    } else {
      this.inputData += value;
    }
  }

  remove() {
    this.inputData = '0';
    this.result = '';
  }

  calculate() {
    try {
      this.inputData = eval(this.inputData);
      this.result = this.inputData;
    } catch (error) {
      this.inputData = 'Error';
    }
  }
}
