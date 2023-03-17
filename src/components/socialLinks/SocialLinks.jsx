import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import './socialLinks.css';


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:dkipkerui@gmail.com'

           
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/resume.pdf',
            style: 'rounded-br-md',
            download: true
        }

    ];

  return (
    <div className='sociallinks'>
        <ul>

            {links.map(({id, child, href, download}) => (
                <li  className={`sociallinks_items`}>
                    <a
                        key={id}
                        href="href"
                        className='sociallinks_items-child'
                        download={download} 
                        target="_blank" 
                        rel='noreferrer'>
                        {child}


                    </a>
                </li>

            ))}
            
        </ul>
    </div>
  )
};

export default SocialLinks;