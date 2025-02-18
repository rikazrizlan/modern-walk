import Link from 'next/link';
import Product from '../Product';

interface FlashSaleProps {
    products: any;
}

const categories: any[] = [
    {
        name: 'Men\'s Clothing',
        color: '#2BD9AF',
        link: '/mens-clothing'
    },
    {
        name: 'Women\'s Clothing',
        color: '#FF5E84',
        link: '/womens-clothing'
    }
]

const Categories = () => {
    return (
        <div className="mt-20">
            <h2 className='font-bold mb-8'>Categories</h2>
            <div className='grid sm:grid-cols-2 gap-4 w-full'
            >

                {
                    categories.map((item: any, index: number) => (
                        <Link href={item.link} key={index}>
                            <div
                                style={{ background: item.color, borderRadius: 50 }}
                                className={`flex justify-center items-center w-full h-80`}>
                                <p className='font-bold xs:text-xl md:text-3xl lg:text-5xl text-white'>{item.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>

    );
};

export default Categories;