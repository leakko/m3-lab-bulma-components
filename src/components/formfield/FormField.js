import React from "react"
import "./FormField.css"



   
     const FormField = props => {
            return (
                <div className='FormField'>
                    <label className='label'>{props.label}</label>
                    <label className='type'>{props.type}</label>
                    <label className='placeholder'>{props.placeholder}</label>
                </div>
            );
        };
export default FormField;

    


