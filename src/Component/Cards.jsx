import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

export const Cards = (props) => {
  return (
    <div className={props.clasName} >
        <div className={props.contimgMain}>
            <div className={props.imgclassdiv}>
            <Link 
              to={props?.imgSlug || " "}>
                <img src={props.src} alt="" width={props.width} className={props.imgcls} />
                </Link>
            </div>
            <div className={props.contentcls}>
              
                <p className={props.titlecls}>
                <Link 
              to={props?.headingslug || " "}> 
                  {props.heading} 
                  </Link></p>
                <p className={props.paracls}>
                  <Link
                  to={props.titleslug || " "}>
                  {props.title}
                  </Link> </p>
                <p className= {props.authorcls}>{moment(props.publish).format("Do MMM ")}<span>
                  <Link to ={props?.authorslug || " "}>
                   {props.author}
                   </Link></span> </p>
            </div>
        </div>
        
    </div>
  )
}
