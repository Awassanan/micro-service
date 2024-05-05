import { AppService } from './app.service';
import { ProductDto } from './app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getProducts(): ProductDto[];
    getProductById(id: string): ProductDto;
    createProduct(productDto: ProductDto): any;
    updateProduct(data: any): any;
    deleteProduct(id: string): any;
}
