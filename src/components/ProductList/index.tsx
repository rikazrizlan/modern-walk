import { useAppContext } from '@/context/AppContext';
import Product from '../Product';

interface ProductListeProps {
    category?: string;
}

const ProductList:React.FC<ProductListeProps> = ({category}) => {
    const { products } = useAppContext();
    let filteredProducts = products;

    if(category) {
        filteredProducts = products.filter((item: any) => item.category == category);
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {filteredProducts.map((product: any) => (
                <Product
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default ProductList;