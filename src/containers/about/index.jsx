import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import {Animate} from 'react-simple-animate';
import {DiApple,DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from "react-icons/fa";

const personalDatails=[
  { 
    label:"Name",
    value:"Rahul Kumar",
  },
  {
    label:"Age",
    value:"25",
  },
  {
    label:"Address",
    value:"India",
  },
  {
        label:"Email",
        value:'rahulkumar2831155@gmail.com',
  },
  {
        label:"Contact Number",
        value:"7818072556",

  },
  
]

const jobSummary="Sessional and independent Frontend Developer 6 month experience in binding the Art  of design with skill of programming to deliver an immersive and engaging user eeperience through efficient website development,proactive feature optimization and relentless debugging.very passionate about aesthetics and UI design.it is imperative that you provide through approach to you resume.As a front End Developer yu will be judged by your ability to use UX and UI concepts and follow design guuideline.Its about expressing your attention to datail and how you can help implement design ideas for your future employes"




const About = () => {
  return (
        <section id='about' className='about'>
          <PageHeaderContent
           headerText="About Me"
           icon={<BsInfoCircleFill size={40}/>}
          />
          <div className="about__content">
          <div className="about__content__personalWrapper">
          <Animate
       play 
       duration= {1.5}
       delay={1}
       start={{
        transform : 'translateX(-900px)'
       }}
       end={{
        translate : 'translatex(0px)'
       }}
       >
         <h3>front End Developer</h3>
         <p>{jobSummary}</p>

</Animate>

     
       <Animate
       play 
       duration= {1.5}
       delay={1}
       start={{
        transform : 'translateX(500px)'
       }}
       end={{
        translate : 'translatex(0px)'
       }}
       >
<h3 className="personalInformationHeaderText">Personal Information</h3>
<ul>
  {
    personalDatails.map((item,i)=>(
      <li key={i}>
      <span className="title">{item.label}</span>
      <span className="value">{item.value}</span>


      </li>
    ))
  }
</ul>
</Animate>

          </div>
     <div className="about__content__servicesWrapper">
     <Animate
       play 
       duration= {1.5}
       delay={1}
       start={{
        transform : 'translateX(500px)'
       }}
       end={{
        translate : 'translatex(0px)'
       }}
       >
     <div className="about__content__servicesWrapper__innerContent">
  <div>
    <FaDev size={60} color="var(--yellow-theme-main-color)" />
  </div>
  <div>
    <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
  </div>
  <div>
    <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
  </div>
  <div>
    <DiApple size={60} color="var(--yellow-theme-main-color)" />
  </div>
</div>

</Animate>   
     </div>
        
          </div>


        </section>
  )
}

export default About;
