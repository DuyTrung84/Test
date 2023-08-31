import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {
  values: string = '0';


  onChange(values: string) {
    if (values === '0' || this.values === '0') {
      this.values = values;
    } else {
      this.values += values;
    }
  }
  remove() {
    this.values = '0'
  }
  caculate() {
    this.values = eval(this.values);
  }
}
