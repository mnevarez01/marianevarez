import React from 'react';


import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './style.css'


const HomePage = () => {

  const info = [
    {
      title: 'Denver Through the Decades',
      img: 'https://i.imgur.com/U2mi7Kf.png',
      description: 'An application using ReactJs, Mongoose, Express to create a historical application for those in the Denver Area. You will be able to navigate and learn what happened through the decades. You can also log in and add content and update the content as you see fit.',
      link: 'https://denverdecades.herokuapp.com/'
    },
    {
      title: 'Alewery',
      img: 'https://i.imgur.com/0hEZeSx.png',
      description: 'A site that contains all beers from your local breweries! To all breweries have your beers accessible to all!',
      link: 'https://mighty-depths-48025.herokuapp.com/'
    },
    {
      title: 'Quarintainment',
      img: 'https://i.imgur.com/1DhzhNx.png',
      description: 'While facing hard times building a website that is interactive and distracting to the mind.',
      link: 'https://mnevarez01.github.io/tmtg/'
    },
    {
      title: 'README Generator',
      img: 'https://i.imgur.com/RN2fyS2.png',
      description: 'This project will allow you to create a README.MD with little effort.',
      link: 'https://github.com/mnevarez01/readMe-generator'
    },
  ]



  return (
    <div className='blue-gradient color-block-5 mb-3 mx-auto z-depth-1-half  background'>
      <br></br>
      <h2 className='text text-left font-weight-bold'>Portfolio:</h2>
      {info.map(({ title, img, description, link }) =>
        (
          <MDBContainer key={title} className="mt-5">
            <MDBRow>
              <MDBCol md='10' className="mb-3">
                <h3 className='titles font-weight-bold text-white text-monospace'>{title}</h3>
                <MDBView hover>
                  <img

                    src={img}
                    className="img-fluid z-depth-5 rounded"
                    alt=""
                  />
                  <MDBMask onClick={() => { window.open(link) }} className="flex-center" overlay="indigo-strong">
                    <p className="white-text text-center">{description}</p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        ))
      }
    </div >
  )
}

export default HomePage