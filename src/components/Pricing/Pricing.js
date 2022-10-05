import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'free', price: 0, features:[
            'Awesome Feature',
            'Extra Feature',
            'unnecessary Feature',
            'will never use feature',
            'Dudai Feature',
            'Ajaira feature'
        ] },
        { id: 2, name: 'medium', price: 9.99 },
        { id: 3, name: 'premium', price: 19.99 },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-400 p-12 text-white'>The Best Deal in Town</h2>
            <div className='grid grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;