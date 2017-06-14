import {Component ,OnInit} from '@angular/core'; // For component decorator we need import statement to import component from angualr 
import {IProduct} from './product';

@Component({ // This is the component decorator that defines the metadata
    selector :'pm-products', 
    moduleId : module.id,
    templateUrl:'product-list.component.html', // here we provide the path for the template and it should be relative to index.html
    styleUrls :['product-list.component.css']
})

export class ProductListComponent implements OnInit{
   pageTitle : string ='Product List!';
   imageWidth : number = 50;
   productTitle : string ='productTitle';
   listFilter : string = "Cart";
   showImage : boolean =false;
   products : IProduct[]=[{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }] ; 

    toggleImage() : void{
           this.showImage = !this.showImage;
    }

    ngOnInit() : void {
        console.log("In ngOnit")
    }

    onRatingClicked(message: string) : void{
    this.pageTitle = 'Product List: ' + message;
}
}