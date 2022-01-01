import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() product : any;
  @Input() sumItem : any;
  ngOnInit(): void {
  }

  removeProduct(paramId : string) : void {
    const index = this.product.findIndex((product: { id: string; }) => product.id === paramId)
    if(index !== -1) {
      this.product.splice(index, 1)
    }
  }

  updateQuantity(element : any){
    (element.value>=1&&element.value<=99)?console.log(element.value):(console.log('Invalid !'))
    const sum =element.value + element.value;
    console.log(sum);
  }

}
