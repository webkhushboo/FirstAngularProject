import {Component ,OnInit} from '@angular/core'; // For component decorator we need import statement to import component from angualr 
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({ // This is the component decorator that defines the metadata
     moduleId : module.id,
    templateUrl:'product-list.component.html', // here we provide the path for the template and it should be relative to index.html
    styleUrls :['product-list.component.css']
})

export class ProductListComponent implements OnInit{
   pageTitle : string ='Product List!';
   imageWidth : number = 50;
   productTitle : string ='productTitle';
   listFilter : string;
   showImage : boolean =false;
   products : IProduct[] ; 
   errorMessage : string;

    constructor(private _productService : ProductService){

    }
    toggleImage() : void{
           this.showImage = !this.showImage;
    }

    ngOnInit() : void {
        console.log("In ngOnit");
        this._productService.getProduct().subscribe(
            products => this.products =products,
            error=> this.errorMessage = <any>error);
    }

    onRatingClicked(message: string) : void{
    this.pageTitle = 'Product List: ' + message;
}
}