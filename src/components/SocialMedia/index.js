import React , {useState , useEffect } from 'react';
import axios from 'axios';

import {SocialMediaSection , Social , SocialIcon , SocialParag , Span} from './style.js';

function SocialMedia() {

  const [ socials , setSocials] = useState([]);
  useEffect ( () =>{
    axios.get('js/data.json').then( res => { 
      setSocials(res.data.social);
    } )
  } , [] );

  const socialList = socials.map( (social) =>{
    return(
      <Social key={social.id} color={social.color}>
          <SocialIcon className={social.icon}></SocialIcon>
          <SocialParag>
              <Span info1 > {social.title} </Span>
              <Span info2>{social.body}</Span>
          </SocialParag>
      </Social>
    )
  } )

  return (
    <SocialMediaSection>
           
            {socialList}
    
    </SocialMediaSection>
  );
}

export default SocialMedia;
