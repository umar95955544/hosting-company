import React from 'react'
import Cards from '../../components/Cards'
import cardimg1 from '../../assets/images/f-1.svg'
import cardimg2 from '../../assets/images/f-2.svg'
import cardimg3 from '../../assets/images/f-3.svg'
import cardimg4 from '../../assets/images/f-4.svg'

function Fourcards() {
    // Sample data for the cards
  const cardsData = [
    {
      imageUrl: cardimg1,
      heading: '99.9% Uptime',
      paragraph: 'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
    },
    {
      imageUrl: cardimg2,
      heading: 'Blazing Fast Web Hosting',
      paragraph: 'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
    },
    {
      imageUrl: cardimg3,
      heading: 'Free SSL Certificates',
      paragraph: 'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
    },
    {
      imageUrl: cardimg4,
      heading: '24x7 Friendly Support',
      paragraph: 'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
    },
    // Add data for Card 3 and Card 4 here
  ];
  return (
    <div className="container py-4">
    <div className="row text-center">
      {cardsData.map((cards, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-12">
          <Cards
            imageUrl={cards.imageUrl}
            heading={cards.heading}
            paragraph={cards.paragraph}
          />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Fourcards