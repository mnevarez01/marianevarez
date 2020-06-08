import React from 'react';


const HomePage = () => {
  const info = [
    {
      title: 'Denver Through the Decades',
      img: 'https://i.imgur.com/U2mi7Kf.png',
      description: 'An application using ReactJs, Mongoose, Express to create a historical application for those in the Denver Area. You will be able to navigate and learn what happened through the decades. You can also log in and add content and update the content as you see fit.'
    },
    {
      title: 'Alewery',
      img: 'https://i.imgur.com/0hEZeSx.png',
      description: 'A site that contains all beers from your local breweries! To all breweries have your beers accessible to all!'
    },
    {
      title: 'Quarintainment',
      img: 'https://i.imgur.com/1DhzhNx.png',
      description: 'While facing hard times building a website that is interactive and distracting to the mind.'
    },
    {
      title: 'README Generator',
      img: 'https://i.imgur.com/RN2fyS2.png',
      description: 'This project will allow you to create a README.MD with little effort.',
      link: 'https://github.com/mnevarez01/readMe-generator'
    },
  ]

  return (
    <div className='container'>
      {info.map(({ title, img, description }) =>
        (
          <div className="card mb3" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default HomePage