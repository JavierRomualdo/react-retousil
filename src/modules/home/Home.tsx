

import ImageIllustration from '../../assets/images/Illustration-1.png';
import './home-rimac.scss';
import './home.scss';
import { PanelSeguro } from '../../components/home/PanelSeguro';
// import { useForm } from '../../hooks/useForm';
import { initialStateFormHome } from '../../params/params';

import { useForm } from '../../hooks/useForm';
import { getPersonas } from '../../helpers/getPersonas';
// import { Redirect, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useHistory } from 'react-router';

export const Home = () => { // {store }: any
  
  let history = useHistory();
  // console.log(store)
  // const {persona, agregarPersona } = props;
  // console.log(persona)
  const [ values, handleInputChange ] = useForm(initialStateFormHome);

  const { tipoDocumento, numDocumento, fecNacimiento, telefono, checkVerificacion } = !!values && values;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handleDocument('df4');
    // agregarPersona(values);

    getPersonas().then(persona => {
      console.log('persona:')
      console.log(persona)
      localStorage.setItem('KEY_PERSONA',JSON.stringify(persona));

      history.push("/datos");
      // <Redirect to="/datos" />
      // <Route exact path="/datos">
      //   <Redirect to="/datos" />
      // </Route>

      // agregarPersona(persona);
    });
  }

  return (
    <div className="home">
      <div className="bg-left">
        {/* image */}
        <img src={ ImageIllustration }/>
      </div>
      <div className="home__container">
      </div>
      <div className="container">
        <div className="row">
          <PanelSeguro />
          <div className="home__form">
            <form onSubmit={ handleSubmit }>
              <div className="row">
                <div className="col p-0">
                  <h3>
                    Obtén tu <strong className="text-rimac">seguro ahora</strong>
                  </h3>
                  <div className="home-sub-title">Ingresa los datos para comenzar.</div>
                </div>              
              </div>
          
              <div className="row mt-4">
                <div className="col col-md-4 p-0">
                  <select id="disabledSelect" className="form-select form-control height-56" name="tipoDocumento"
                    value={ tipoDocumento } onChange={ handleInputChange } required>
                    <option value="2">Dni</option>
                    <option value="1">CE</option>
                  </select>
                </div>
                <div className="col col-md-8 form-floating p-0">
                  <input type="text" id="numDoc" className="form-control error" placeholder="Nro. de documento" name="numDocumento"
                    value={ numDocumento } onChange={ handleInputChange } required maxLength = { 8 }/>
                  <label htmlFor="numDoc" className="input-placeholder">Nro. de Documento</label>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col form-floating p-0">
                  <input type="date" id="date" className="form-control error" placeholder="Fecha de nacimiento" name="fecNacimiento"
                    value={ fecNacimiento } onChange={ handleInputChange } required/>
                  <label htmlFor="date" className="input-placeholder">Fecha de nacimiento</label>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col form-floating p-0">
                  <input type="text" id="celular" className="form-control error" placeholder="Celular" name="telefono"
                    value={ telefono } onChange={ handleInputChange } required/>
                  <label htmlFor="celular" className="input-placeholder">Celular</label>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col p-0">
                  <div className="form-check checkbox checkbox-success checkbox-inline">
                    <input className="form-check-input" type="checkbox" id="check-terms" name="checkVerificacion"
                       value={ checkVerificacion } onChange={ handleInputChange } required/>
                    <label className="form-check-label font-size-12 termino" htmlFor="check-terms">
                      Acepto la <span className="term-cond">Política de Proteccion de Datos Personales y los Términos 
                      y Condiciones</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col p-0">
                  <div className="form-check checkbox checkbox-success checkbox-inline">
                    <input className="form-check-input" type="checkbox" value="" id="check-terms" />
                    <label className="form-check-label font-size-12 termino" htmlFor="check-terms">
                      Acepto la <span className="term-cond">Política de Envío de Comunicaciones Comerciales</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col p-0">
                  <button type="submit" className="btn btn_comenzar text-white">
                    COMENCEMOS
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


// const mapStateToProps = (state: any) => ({
//   persona: state
// })

// const mapDispatchToProps = (dispatch: any) => ({

//   // agregarPersonw = (persona: any) => {
//   //   dispatch({
//   //     type: 'AGREGAR_PERSONA',
//   //     persona
//   //   })
//   // }
//   agregarPersona(persona: any){
//     dispatch({
//       type: 'AGREGAR_PERSONA',
//       persona
//     })
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home);