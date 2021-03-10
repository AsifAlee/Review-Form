import React from 'react';

import './input.style.css';
import './../../App.css';



const InputComponent = ({ label, inputType,placeholder }) => {
   console.log("Label is:", label);
   console.log("input type:", inputType);
   return (
      <div className='row'>
         <div className="col-25">
            <label for="fname">{label}</label>
         </div>
         <div className="col-75">
            <input type={inputType} id="fname" name="firstname" placeholder={placeholder} />

         </div>

      </div>

   )
}

export default InputComponent;