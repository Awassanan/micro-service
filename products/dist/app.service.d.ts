import { ProductDto } from './app.dto';
export declare class AppService {
    private products;
    getProducts(): ProductDto[];
    getProductById(id: string): ProductDto;
    createProduct(productDto: ProductDto): ProductDto;
    updateProduct(id: string, productDto: ProductDto): ProductDto;
    deleteProduct(id: string): ProductDto;
}
