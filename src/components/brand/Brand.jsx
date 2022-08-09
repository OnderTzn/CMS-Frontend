import React from 'react';
import { java, springboot, reactjs } from "./import";
import './brand.css';


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <a href="https://www.java.com/tr/">
          <img src={java} alt="java" />
        </a>
      </div>
      <div>
        <a href="https://spring.io/projects/spring-boot">
          <img src={springboot} alt="springboot" />
        </a>
      </div>
      <div>
        <a href="https://tr.reactjs.org/">
          <img src={reactjs} alt="reactjs" />
        </a>
      </div>
    </div>
  )
}

export default Brand