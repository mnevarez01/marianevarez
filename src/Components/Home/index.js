import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './style.css'


const HomePage = () => {
  const ref = useRef(null);



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
    <div className='Background'>
      <h2 className='text'>Projects</h2>
      {info.map(({ title, img, description, link }) =>
        (
          <MDBContainer className="mt-5">
            <MDBRow>
              <MDBCol md='10'>
                <MDBView hover>
                  <img
                    src={img}
                    className="img-fluid"
                    alt=""
                  />
                  <MDBMask className="flex-center" overlay="blue-strong">
                    <h3 onClick={() => { window.open(link) }} className="white-text title">{title}</h3>,
                    <hr></hr>,
                    <p className="white-text">{description}</p>
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