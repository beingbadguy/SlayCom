import Faq from './Faq';
import React from 'react';

const Faqs = () => {
  return (
    <div className='pt-20 pb-20 flex-col md:flex-row flex  gap-10 justify-evenly items-center p-2  '>
      <div>
        <h1 className='text-3xl'> Burning Questions?</h1>
      </div>
      <div className='flex flex-col gap-2'>
        <Faq
          que='How can I track my order?'
          ans='Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your delivery on our website or through the courier'
        />
        <Faq
          que='What payment methods do you accept?'
          ans='We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and online banking. You can select your preferred payment option at checkout.'
        />
        <Faq
          que=' Can I return or exchange an item?'
          ans="Yes, we have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return the item within [number of days] days for a full refund or exchange. Please refer to our Returns & Exchanges page for more information."
        />
        <Faq
          que='How do I contact customer support?'
          ans='Our customer support team is available [hours of operation] to assist you with any inquiries or concerns. You can reach us via email at @beingbadguy, phone at [phone number], or through our live chat feature on our website.'
        />
        <Faq
          que='Do you offer international shipping?'
          ans='es, we offer international shipping to [list of countries]. Shipping rates and delivery times may vary depending on your location. You can view the shipping options available at checkout.'
        />
      </div>
    </div>
  );
};
export default Faqs;
