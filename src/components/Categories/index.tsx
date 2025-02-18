import Link from 'next/link';
import Product from '../Product';

interface FlashSaleProps {
    products: any;
}

const categories: any[] = [
    {
        name: 'Men\'s Clothing',
        color: 'bg-blue-500',
        link: '/mens-clothing'
    },
    {
        name: 'Women\'s Clothing',
        color: 'bg-red-500',
        link: '/womens-clothing'
    }    
]

const Categories = () => {
    return (
        <div className='grid grid-cols-2 gap-1 w-full'>
            {
                categories.map((item: any, index: number) => (
                    <Link href={item.link} key={index} className={`flex justify-center items-center w-1/2 h-100 ${item.color}`}>
                        {item.name}
                    </Link>
                ))
            }
        </div>
    );
};

export default Categories;