import React , {useState , useEffect} from 'react';
import axios from 'axios';

import {ProfileSkills , ProfileSecion , ProfileList , ProfileItem , ItemSpan , ItemSpanWeb , SkillsSection , SkillsDesc , Bar , BarTitle , BarPerc , BarParent , BarParentSpan , ProfileTitle , ProfileTitleSpan , SkillsTitle , SkillsTitleSpan} from './style.js';

function Profile() {

  const [ skills , setSkills] = useState([]);
  useEffect ( () =>{
    axios.get('js/data.json').then( res => { 
      setSkills(res.data.profile);
    } )
  } , [] );

  const skillsList = skills.map( (skill) =>{
    return(
      <Bar key={skill.id}>
          <BarTitle> {skill.name} </BarTitle>
          <BarPerc> {skill.presentage} </BarPerc>
          <BarParent>
              <BarParentSpan sp={skill.presentage}></BarParentSpan>
          </BarParent>
      </Bar>
    )
  } )

  return (
    <ProfileSkills>
      <div className="container">
        <ProfileSecion>
            <ProfileTitle>
              <ProfileTitleSpan> My </ProfileTitleSpan> Profile
            </ProfileTitle>
            <ProfileList>
                <ProfileItem>
                    <ItemSpan>Name</ItemSpan>
                    Reem Hagrss
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Birthday</ItemSpan>
                    17/02/1997
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Address</ItemSpan>
                    Alexandria
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Phone</ItemSpan>
                    4444 5555 6666
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Email</ItemSpan>
                    reem@reem.com
                </ProfileItem>
                <ProfileItem>
                    <ItemSpan>Website</ItemSpan>
                    <ItemSpanWeb>www.google.com</ItemSpanWeb>
                </ProfileItem>
            </ProfileList>
        </ProfileSecion>
        
        <SkillsSection>
            <SkillsTitle>
              Some <SkillsTitleSpan>skills</SkillsTitleSpan>
            </SkillsTitle>
            <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            {skillsList}
        </SkillsSection>
        
    </div>
  </ProfileSkills>
  );
}

export default Profile;
