import React, { useEffect, useState } from 'react'


const financialTips = [
  {
    expert: "Warren Buffett",
    tip: "Never invest in a business you cannot understand."
  },
  {
    expert: "Suze Orman",
    tip: "Pay yourself first. Save at least 10% of your income."
  },
  {
    expert: "Dave Ramsey",
    tip: "Avoid debt like the plague and live below your means."
  },
  {
    expert: "Robert Kiyosaki",
    tip: "Invest in assets that generate cash flow, not liabilities."
  },
  {
    expert: "Benjamin Graham",
    tip: "The individual investor should act consistently as an investor and not as a speculator."
  }
];

export const FinancialTips = () => {
  const [showQuote, setShowQuote] = useState(financialTips[0])

  useEffect(()=>{
    setInterval(()=>{
     setShowQuote(financialTips[Math.floor(Math.random()*financialTips.length)])
    },3000)
  },[])

  const {expert , tip} = showQuote;
  return (
    <div className='d-flex flex-column justify-content-center'
    style={{
      height: "100%"
    }}
    > 
      <h5>{tip}</h5>
      <p> - {expert}</p>
        
    </div>
  )
}
