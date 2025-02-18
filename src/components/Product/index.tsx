import React from 'react';

interface ProductProps {
    title: string;
    image: string;
    description: string;
    price: number;
}

const ProductCard: React.FC<ProductProps> = ({ title, image, price, description }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-white shadow-lg"
            style={{ borderRadius: 50 }}
        >
            <div className='flex flex-col justify-center items-center p-10'>
                <h3 className="text-center font-bold">{title}</h3>
                <img src={image} alt={title} className="mt-8"
                    style={{
                        width: 395,
                        height: 384,
                        objectFit: 'contain'
                    }}
                />
            </div>


            <div style={{background: '#2BD9AF', borderRadius: 50}} className="flex flex-col justify-center items-center p-10">
                <p>{price}</p>
                <p className="text-sm w-full h-full text-center">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;