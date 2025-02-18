import Product from '../Product';
import ProductList from '../ProductList';

interface FlashSaleProps {
    products: any;
}

const FlashSale: React.FC<FlashSaleProps> = () => {
    return (
        <div>
            <h2>Flash Sale</h2>
            <ProductList />
        </div>
    );
};

export default FlashSale;