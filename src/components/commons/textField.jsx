import React from 'react'
import './styles.css'
{/* <label className="input__label input__label--nao" htmlFor={props.id}>
  <span className="input__label-content input__label-content--nao">{props.label}</span>
</label> */}

const TextField = (props) => {
  return (<span className="input input--nao">
    <input className="input__field input__field--nao" type="text" id={props.id} onChange={props.onChange} placeholder={props.label}/>
    <svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
      <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
    </svg>
  </span>)
}

export default TextField
