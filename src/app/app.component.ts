import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

export interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dropdown';
  dropdownList: City[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor() {
  }

  ngOnInit() {
    this.dropdownList = [
      { id: 1, name: 'Islamabad' },
      { id: 2, name: 'Lahore' },
      { id: 3, name: 'Peshawar' },
      { id: 4, name: 'Karachi' },
      { id: 5, name: 'Faisalabad' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2, //We can change it to 1 if required
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onItemDeSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll() {
    console.log('All items deselected');
  }

  showSelectedItems() {
    console.log(this.selectedItems);
  }
}
