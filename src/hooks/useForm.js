import { useState } from "react";



export const useForm = ( initialForm = {} , formValidations = {}) => {

    const [formState, setFormState] = useState( initialForm )
  

    const onInputChange = ({target}) => {
      const {name ,value } = target
      
      
      setFormState({
        ...formState,
        [name]: value
        })
    }


    const formReset = () => {
       setFormState( initialForm )
    }



    // ESTO ES LO QEU NECESITO EXPONER EN MIS COMPONENTES
    return{
        formState,
        onInputChange,
        formReset
    
    }
}