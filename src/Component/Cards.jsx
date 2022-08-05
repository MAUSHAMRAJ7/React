import React from 'react'
import moment from 'moment'

export const Cards = (props) => {
  return (
    <div className={props.clasName} >
        <div className={props.contimgMain}>
            <div className={props.imgclassdiv}>
                <img src={props.src} alt="" width={props.width} className={props.imgcls} />
            </div>
            <div className={props.contentcls}>
                <p className={props.titlecls}>{props.heading} </p>
                <p className={props.paracls}>{props.title} </p>
                <p className= {props.authorcls}>{moment(props.publish).format("Do MMM YYYY")}<span> {props.author}</span> </p>
            </div>
        </div>
        
    </div>
  )
}
