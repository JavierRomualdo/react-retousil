
import IconDinner from '../assets/images/icon-dinner.png';

export const initialStateFormHome = {
  tipoDocumento: '',
  numDocumento: '',
  fecNacimiento: '',
  telefono: '',
  checkVerificacion: false,
  nombres: '',
  apellidopaterno: '',
  apellidomaterno: '',
  flexRadioGenero: '',
  flexRadioAsegurar: ''
};

export const initialPlanDefault = {
  key: 'basico',
  name: 'Básico',
  monto: '160',
  cobertura: '1MM',
  icon: IconDinner,
  beneficios: {
    zone: true,
    red: true,
    medico: false,
    chequeo: false,
    reembolsoNacional: false,
    reembolsoInternacional: false,
  }
}
export const initialPlan = [
  {
    key: 'basico',
    name: 'Básico',
    monto: '160',
    cobertura: '1MM',
    icon: IconDinner,
    beneficios: {
      zone: true,
      red: true,
      medico: false,
      chequeo: false,
      reembolsoNacional: false,
      reembolsoInternacional: false,
    }
  },
  {
    key: 'avanzado',
    name: 'Avanzado',
    monto: '200',
    cobertura: '5MM',
    icon: IconDinner,
    beneficios: {
      zone: true,
      red: true,
      medico: true,
      chequeo: true,
      reembolsoNacional: false,
      reembolsoInternacional: false,
    }
  },
  {
    key: 'prenium',
    name: 'Prenium',
    monto: '250',
    cobertura: '8MM',
    icon: IconDinner,
    beneficios: {
      zone: true,
      red: true,
      medico: true,
      chequeo: true,
      reembolsoNacional: true,
      reembolsoInternacional: false,
    }
  },
  {
    key: 'full',
    name: 'Full',
    monto: '500',
    cobertura: '10MM',
    icon: IconDinner,
    beneficios: {
      zone: true,
      red: true,
      medico: true,
      chequeo: true,
      reembolsoNacional: true,
      reembolsoInternacional: true,
    }
  }
]