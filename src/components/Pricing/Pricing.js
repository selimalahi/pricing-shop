import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'free', price: 0, features:[
            'Everything on Free',
            'Extra Feature',
            'unnecessary Feature',
            'will never use feature',
            'Hudai Feature',
            'Ajaira feature'
        ] 
    },
        { id: 2, name: 'medium', price: 9.99,
        features:[
            'everything On Medium',
            'Extra Feature',
            'unnecessary Feature',
            'will never use feature',
            'Hudai Feature',
            'Ajaira feature',
        ] 
    },
        { id: 3, name: 'premium', price: 19.99,
        features:[
            'Everything on Premium',
            'Extra Feature',
            'unnecessary Feature',
            'will never use feature',
            'Hudai Feature',
            'Ajaira feature',
        ] 
    },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-400 p-12 text-white'>The Best Deal in Town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4 '>
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