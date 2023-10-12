import React from 'react';

const Price = () => {
  const plans = [
    { name: 'Free Plan', price: '0', features: ['Feature 1', 'Feature 2'] },
    { name: 'Lite Plan', price: '10', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Active Plan', price: '25', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { name: 'Pro Plan', price: '50', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
  ];

  return (
    <div id="Pricing" name="Experience" className="bg-black min-h-screen flex justify-center items-center">
      <div className="max-w-screen-lg mx-auto p-4 w-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold p-2">Pricing Plans</p>
          <p className="text-sm">
            Choose the best suitable plan for you as per your need. <br />
            Not finding yet what you are looking for? Get in touch with us now.
          </p>
        </div>
        <div className="flex justify-center items-center py-8">
          <div className="w-full max-w-screen-lg ">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center px-12 sm:px-0 p-4 border border-white rounded-full overflow-x-auto">
              <div className="flex justify-center items-center">
                <label htmlFor="monthly" className="px-4">
                  Monthly
                  <input type="radio" name="plan" id="monthly" className="ml-2" />
                </label>
              </div>
              <div className="flex justify-center items-center">
                <label htmlFor="quarterly" className="px-4">
                  Quarterly
                  <input type="radio" name="plan" id="quarterly" className="ml-2" />
                </label>
              </div>
              <div className="flex justify-center items-center">
                <label htmlFor="halfYearly" className="px-4 whitespace-nowrap">
                  Half-Yearly
                  <input type="radio" name="plan" id="halfYearly" className="ml-2" />
                </label>
              </div>
              <div className="flex justify-center items-center">
                <label htmlFor="yearly" className="px-4">
                  Yearly
                  <input type="radio" name="plan" id="yearly" className="ml-2" />
                </label>
              </div>
            </div>
      <div className="max-w-screen-lg mx-auto p-4 w-full text-white">
        <div className="flex justify-center items-center py-8">
          <div className="w-full max-w-screen-lg overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg text-black ">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left sticky left-0 bg-white">
                    <p className='text-2xl text-blue-700'>Pricing</p> <br /> Features/Plan
                  </th>
                  {plans.map((plan, index) => (
                    <th key={index} className="py-2 px-4 text-left">
                      <p className='text-2xl text-blue-700'>{`$${plan.price}/Month`}</p> <br /> {plan.name} <br />
                      <p className='text-xs'>{plan.features.join(', ')}</p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Subscribe</button>
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
