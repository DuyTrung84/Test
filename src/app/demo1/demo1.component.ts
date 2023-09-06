import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {
  items: any = [
    { id: 1, name: 'products1', select: false, isEditing: false },
    { id: 2, name: 'products2', select: false, isEditing: false },
  ];

  newItem: any = "";
  countSelect: number = 0;
  lastId: number = 2;
  checkRemoveSelect: boolean = true;
  editingItem: any = null;

  addItem() {
    this.lastId++;
    this.items.push({
      id: this.lastId,
      name: this.newItem,
      select: false,
      isEditing: false
    });
    console.log(this.items);

    this.newItem = "";
  }

  removeSelectItem(id: number) {
    this.items = this.items.filter((item: { id: number; select: boolean }) => id ? item.id !== id : !item.select)
    console.log(this.items);
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].id = i + 1;
    }
    this.countSelect = 0;

  }

  updateSelectCount() {
    this.countSelect = this.items.filter((items: { select: any; }) => items.select).length;
    this.checkRemoveSelect = this.countSelect === 0;
  }

  editItem(id: number) {
    const itemToEdit = this.items.find((item: { id: number }) => item.id === id);
    if (itemToEdit) {
      itemToEdit.isEditing = true;
      this.editingItem = itemToEdit;
    }
    console.log(itemToEdit);

  }

  saveEditedItem() {
    this.editingItem = null;
  }

  cancelEdit() {
    this.editingItem = null;
  }


}
