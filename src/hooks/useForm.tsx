
import { useState } from 'react'

export const useForm = (initialState: any) => {
  const [ values, setValues ] = useState(initialState);

  const handleInputChange = ({ target }: any) => {
    if (target?.type === 'checkbox') {
      setValues({ ...values, [target.name]: target.checked})
    } else {
      setValues({ ...values, [target.name]: target.value})
    }
  }

  return [ values, handleInputChange, setValues ];
}
