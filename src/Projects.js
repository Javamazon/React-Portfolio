import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css';
import example from './Images/websiteSample.jpg';



 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail 
      link=''
      image={example}
      title='Weather API'
      category=''
      />

      <Thumbnail 
      link=''
      image={example}
      title='Twitch API'
      category=''
      />

    <Thumbnail 
      link=''
      image={example}
      title='Bootstrap Responsive Design Travel Website'
      category='Website'
      />
    </div>
  )
}
 
export default Projects;