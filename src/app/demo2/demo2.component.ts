import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {
  inputData: string = '0';
  result: string = '';
  inputFromKeyboard: string = '';

  // Lắng nghe sự kiện keyup từ bàn phím
  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.onKeyboardInput(event.key);
  }
  onChange(value: string) {
    this.onKeyboardInput(value);
  }
  onKeyboardInput(value: string) {
    if (/[0-9+\-*/. ()]/.test(value)) {
      if (this.result === '') {
        console.log(value);
        if (!/[+\-*/.]$/.test(this.inputData) || !/^[+\-*/.]$/.test(value)) {
          this.inputFromKeyboard += value;
          this.inputData = this.inputFromKeyboard;
          this.result = '';
        }
      } else {
        this.inputFromKeyboard = value;
        this.inputData = this.inputFromKeyboard;
        this.result = '';
      }
    } else if (value === 'Enter') {
      this.calculate();
    } else if (value === 'Delete') {
      this.remove();
    } else if (value === 'Backspace') {
      this.backspace()
    }
  }


  remove() {
    this.inputData = '0';
    this.result = '';
    this.inputFromKeyboard = '';
  }
  backspace() {
    if (this.inputData === "Lỗi không xác định" || this.inputData === "Số không chia được cho 0") {
      this.remove()
    }
    else {
      this.inputData = this.inputData.slice(0, -1);
      this.inputFromKeyboard = this.inputData;
    }
  }
  calculate() {
    try {
      let result = eval(this.inputData);
      if (result == "Infinity") {
        this.inputData = 'Số không chia được cho 0';
      }
      else {
        if (Number.isInteger(result)) {
          this.inputData = result;
          console.log(result);

        } else {
          this.inputData = result.toFixed(3);
        }
      }
      this.result = this.inputData;
    } catch (error) {
      this.inputData = 'Lỗi không xác định';
    }
  }
}
