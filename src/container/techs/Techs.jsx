import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import github from '../../assets/github.png';
import graphql from '../../assets/graphql.png';
import tailwind from '../../assets/tailwind.png';
import nextjs from '../../assets/nextjs.png';
import reactImage from '../../assets/react.png';
import javascript from '../../assets/javascript.png';
import './techs.css';

  

const Techs = () => {
  

  const tech= [
    {
      id:1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'  
    }, 
    {
      id:2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'  
    }, 
    {
      id:3,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'  
    }, 
    {
      id:4,
      src: graphql,
      title: 'GraphQl',
      style: 'shadow-pink-400'  
    }, 
    {
      id:5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-500'  
    },
    {
      id:6,
      src: nextjs,
      title: 'NextJs',
      style: 'shadow-white'  
    },
     {
      id:7,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'  
    }, 
    {
      id:8,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'  
    }
  ]
  return (
    <div className='tech' name='techs'>
      <div className='tech_first'>
        <div>
          <p className='title'>Experience</p>
          <p className='title2'>These are the technologies i have worked with</p>
        </div>
        <div className='components'>
          {
            tech.map(({id,src, title, style}) => (
              <div
               key={id} 
               className={'child'} 
               style={`${style}`}
               >
                <img src={src} alt='' className='image-d'/>
                <p className='final'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Techs;