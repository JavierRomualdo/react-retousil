
import ImageIllustration from '../../assets/images/Illustration-1.png';
import ImageRight from '../../assets/images/arrow-right.svg';
import './datos.scss';
import { PanelDatos } from '../../components/datos/PanelDatos';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { initialStateFormHome } from '../../params/params';
import { useEffect } from 'react';

export const Datos = ( ) => { // {persona}: any

  let history = useHistory();

  const [ values, handleInputChange, setValuesForm ] = useForm(initialStateFormHome);

  useEffect(() => {
    const keyPersona = localStorage.getItem('KEY_PERSONA');
    if (keyPersona) {
      let persona = JSON.parse(keyPersona);
      const fechaSplit = persona.fecNacimiento.split('/');
      const fecNacimiento = fechaSplit[2]+'-'+fechaSplit[1]+'-'+fechaSplit[0];
      persona = {...persona, fecNacimiento };
      setValuesForm(persona);
    } else {
      history.push("/");
    }
  }, []);

  const { tipoDocumento, numDocumento, fecNacimiento, nombres, 
    apellidopaterno, apellidomaterno } = !!values && values;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Datos save !');
    console.log(values);
    history.push("/plan");
  }

  return (
    <div className="datos">
      <div className="bg-left">
        {/* image */}
        <img src={ ImageIllustration }/>
      </div>
      <div className="home__container">
      </div>
      <div className="container">
        <div className="row">
          <PanelDatos />
          <div className="datos__form">
            <form onSubmit={ handleSubmit }>
              <div className="row">
                <div className="col p-0">
                  <h3>
                    Hola, <strong className="text-rimac">Pepito</strong>
                  </h3>
                  <div className="home-sub-title">Valida que los datos sean correctos.</div>
                  <div className="mt-4">Datos personales del titular</div>
                </div>              
              </div>
          
              <div className="row mt-4">
                <div className="col p-0">
                  <select id="disabledSelect" className="form-select form-control height-56" name="tipoDocumento"
                    value={ tipoDocumento } onChange={ handleInputChange } required>
                    <option value="2">Dni</option>
                    <option value="1">CE</option>
                  </select>
                </div>
                <div className="col form-floating p-0">
                  <input type="text" id="numDoc" className="form-control " placeholder="Nro. de documento" name="numDocumento"
                    value={ numDocumento } onChange={ handleInputChange } required maxLength = { 8 }/>
                  <label htmlFor="numDoc" className="input-placeholder">Nro. de Documento</label>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col form-floating p-0">
                  <input type="text" id="nombres" name="nombres" className="form-control " placeholder="Nombres"
                    value={ nombres } onChange={ handleInputChange } required/>
                  <label htmlFor="nombres" className="input-placeholder">Nombres</label>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col form-floating p-0">
                  <input type="text" id="apellidopaterno" name="apellidopaterno" className="form-control form-control-sm"
                    value={ apellidopaterno } onChange={ handleInputChange } required
                    placeholder="Apellido Paterno"/>
                  <label htmlFor="apellidopaterno" className="input-placeholder">Apellido Paterno</label>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col form-floating p-0">
                  <input type="text" id="apellidomaterno" name="apellidomaterno" className="form-control form-control-sm"
                    value={ apellidomaterno } onChange={ handleInputChange } required
                    placeholder="Apellido Materno"/>
                  <label htmlFor="apellidomaterno" className="input-placeholder">Apellido Materno</label>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col form-floating p-0">
                  <input type="date" id="date" className="form-control form-control-sm" placeholder="Fecha de nacimiento" 
                    name="fecNacimiento" value={ fecNacimiento } onChange={ handleInputChange } required/>
                  <label htmlFor="date" className="input-placeholder">Fecha de nacimiento</label>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col p-0">
                  Género
                </div>
              </div>

              <div className="row mt-2">
                <div className="col p-0">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioGenero" id="flexRadioMaculino1" 
                      value="Masculino" onChange={ handleInputChange } required/>
                    <label className="form-check-label color-gris" htmlFor="flexRadioMaculino1">
                      Masculino
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioGenero" id="flexRadioFemenino" 
                      value="Femenino" onChange={ handleInputChange } required/>
                    <label className="form-check-label color-gris" htmlFor="flexRadioFemenino">
                      Femenino
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col p-0">
                  ¿A quién vamos a asegurar?
                </div>
              </div>

              <div className="row mt-2">
                <div className="col p-0">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioAsegurar" id="flexRadioAmi" 
                      value="Solo a mí" onChange={ handleInputChange } required/>
                    <label className="form-check-label color-gris" htmlFor="flexRadioAmi">
                      Solo a mí
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioAsegurar" id="flexRadioFamilia" 
                      value="A mi y a mi familia" onChange={ handleInputChange } required/>
                    <label className="form-check-label color-gris" htmlFor="flexRadioFamilia">
                      A mi y a mi familia
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col p-0 text-end">
                  <button type="submit" className="btn btn_comenzar text-white">
                    CONTINUAR
                    <img className="ms-3" src={ ImageRight } />
                  </button>
                </div>
              </div>          
            </form>
            
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  persona: state
})

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Datos);