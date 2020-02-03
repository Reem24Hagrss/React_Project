import React , {Component} from 'react';
import axios from 'axios';

import {WorkSection, WorkTitle , Span  , PartIcon , PartTitle , PartLine , PartDesc , Part } from './style.js';

class Work extends Component {
state = {
  works:[]
}

componentDidMount =() =>{
  axios.get('js/data.json').then( res => { 
    this.setState({
      works : res.data.works
    })
  } );
}

  render(){

    const {works} = this.state;
    const worksList = works.map( (workItem) =>{
      return(
        <Part first={workItem.id} key={workItem.id}>
          <PartIcon className={workItem.icon_name} ></PartIcon>
          <PartTitle >{workItem.title}</PartTitle>
          <PartLine  />
          <PartDesc >
              {workItem.body}
          </PartDesc>
      </Part>
      )
      
    } )

    return (
      <WorkSection>
              <div className="container">
                  <WorkTitle>
                    <Span> My </Span> Work
                  </WorkTitle>
            
                  {worksList}
                  
                </div>
        </WorkSection>
    );
  }
}

export default Work;
