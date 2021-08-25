

import { createStore } from "redux";

const initialState = {
  tipoDocumento: '32',
  numDocumento: '',
  fecNacimiento: '',
  telefono: '',
  checkVerificacion: false
}

const reducerPersona = (state: any = initialState, action: any) => {
  if (action.type === 'AGREGAR_PERSONA') {
    return { ...action.persona }
  }
  return state;
}

export default createStore(reducerPersona);