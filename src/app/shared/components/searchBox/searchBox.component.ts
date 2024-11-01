import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtSearch', { static: true })
  tagInput!:ElementRef <HTMLInputElement>;

  public value: string = '';

  public search() {
    this.value = this.tagInput.nativeElement.value;
    this.onValue.emit(this.value);
  }

}
