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
                        width: 200,
                        height: 200,
                        objectFit: 'contain'
                    }}
                />
            </div>

            <div style={{ background: '#2BD9AF', borderRadius: 50, height: '200px' }} className="w-full flex flex-col justify-start items-center p-10">
                <p className='font-bold text-lg' style={{ color: '#0E42FD' }}>Rs {price}</p>

                <p
                    style={{
                        maxHeight: '100px',
                        whiteSpace: 'wrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                    className="text-md text-center">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;