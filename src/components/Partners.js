import React from 'react';

const Partners = () => {
  const partners = [
    { id: 1, image: '/assets/images/partner1.png', name: '파트너 1' },
    { id: 2, image: '/assets/images/partner2.png', name: '파트너 2' },
    { id: 3, image: '/assets/images/partner3.png', name: '파트너 3' }
  ];

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">파트너 & 협력사</h2>
      <div className="flex flex-wrap justify-center items-center space-x-6">
        {partners.map(partner => (
          <img
            key={partner.id}
            src={process.env.PUBLIC_URL + partner.image}
            alt={partner.name}
            className="h-12 my-2"
          />
        ))}
      </div>
    </section>
  );
};

export default Partners; 