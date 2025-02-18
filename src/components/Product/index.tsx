import React from 'react';

interface ProductProps {
    title: string;
    image: string;
    description: string;
    price: number;
}

const ProductCard: React.FC<ProductProps> = ({ title, image, price, description }) => {
    return (
        <div className="flex flex-col items-center w-64 h-full bg-white shadow-lg p-10">
            <h3>{title}</h3>
            <img src={image} alt="Product" className="size-24" />
            <p>{price}</p>
            <p className="text-sm w-full h-full bg-green">{description}</p>
        </div>
    );
};

export default ProductCard;