import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Shoping Card';
  @Input() numberItems : number = 0; // Nhận giá trị đầu vào từ component khác

  constructor() { }

  ngOnInit(): void {
  }
  
}
