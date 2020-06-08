import React from 'react';
import './style.css'


const Menu = () => {

  const linkedIn = () => {
    window.open('https://www.linkedin.com/in/mnevarez05/')
  }
  const gitHub = () => {
    window.open('https://github.com/mnevarez01')
  }


  return (

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item text-light font">Maria Nevarez</li>
        <li class="breadcrumb-item" onClick={linkedIn}>LinkedIn</li>
        <li class="breadcrumb-item" onClick={gitHub}>GitHub</li>
        <li class="breadcrumb-item" aria-current="page">Resume</li>
      </ol>
    </nav>



  )

}
export default Menu;