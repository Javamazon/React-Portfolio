import React from 'react'; //import the Component component from React
import {Link} from 'react-router-dom'; //import the Link Component
import './App.css';


function Thumbnail(props){
  return (
    <div className='project'>
  <Link to={props.link}>
    <div className='project-image'>
      <img src={props.image} alt=''/>
    </div>
    <div className='project-title'>{props.title}</div>
    <div className='project-category'>{props.category}</div>
  </Link>
</div>

 )
}

export default Thumbnail;

