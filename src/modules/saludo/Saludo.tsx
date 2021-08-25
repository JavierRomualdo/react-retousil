

import ImageIllustration from '../../assets/images/Illustration-1.png';
import './saludo.scss';
import { PanelSaludo } from '../../components/saludo/PanelSaludo';

export const Saludo = () => {
  return (
    <div className="saludo">
      <div className="bg-left">
        {/* image */}
        <img src={ ImageIllustration }/>
      </div>
      <div className="home__container">
      </div>
      <div className="container">
        <div className="row mt-5">
          <PanelSaludo />
          <div className="col ms-5" style={{alignSelf: 'center', width: '5%', maxWidth: '50%'}}>
            <div className="container">
              <h1 className="ms-5 mt-5">
                ¡Gracias por <strong className="text-rimac">confiar en nosotros</strong>
              </h1>
              <div className="home-sub-title ms-5">Queremos conocer mejor la salud de los asegurados. Un asesor
                <span className="fw-bold"> se pondrá en contacto</span> contigo en las siguientes 
                <span className="fw-bold"> 48 horas.</span></div>

              <div className="row mt-5">
                <div className="col ms-5 text-end">
                  <button className="btn btn_comprar btn-sm text-white">
                    IR A SALUD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row mt-5">
          <div className="col p-0 text-end ms-5">
            <div className="container">
              <button className="btn btn_comprar btn-sm text-white">
                IR A SALUD
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
