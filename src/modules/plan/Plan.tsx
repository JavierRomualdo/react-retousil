import ImageIllustration from '../../assets/images/Illustration-1.png';
import IconDinner from '../../assets/images/icon-dinner.png';
import IconHeartActive from '../../assets/images/heart-active.svg';
import IconHeartDes from '../../assets/images/heart-des.svg';
import { PanelDatos } from '../../components/datos/PanelDatos';
import './plan.scss';
import { useState } from 'react';
import { useHistory } from 'react-router';

import { initialPlan, initialPlanDefault } from '../../params/params';
import { CardPlan } from './components/CardPlan';

export const Plan = () => {

  let history = useHistory();

  const [plann, setPlan] = useState(initialPlanDefault);

  const handleClickPlan = (plan: any) => {
    setPlan(plan)
  }

  const handleClickComprarPlan = (e: any) => {
    history.push("/saludo");
  }

  return (
    <div className="datos">
      <div className="bg-left">
        {/* image */}
        <img src={ ImageIllustration } alt="illustration"/>
      </div>
      <div className="home__container">
      </div>
      <div className="container">
        <div className="row">
          <PanelDatos />
          <div className="plan__form">
            <form>
              <div className="row">
                <div className="col p-0">
                  <h3>
                    Elige <strong className="text-rimac">tu protección</strong>
                  </h3>
                  <div className="home-sub-title">Selecciona tu plan de salud ideal.</div>
                </div>              
              </div>

              <div className="row mt-4">
                {initialPlan.map((plan, index) => <CardPlan key={ index } plan={ plan } 
                  planSelect={ plann } handleClick={ handleClickPlan } />)}
              </div>

              <div className="row mt-4">
                <div className="col p-0">
                  <div className="card">
                    <div className="card-header text-center" style={{fontSize: '14px'}}>
                      Cuentas con estos beneficios:
                    </div>
                    <div className="card-body">
                      <div className="row mt-4">
                        <div className="col p-0">
                          <div style={{fontSize: '10px', fontWeight: 'bold'}}>Cobertura máxima</div>
                          <div><strong style={{fontSize: '25px', fontWeight: 'bold'}}>S/ { plann?.cobertura }</strong></div>
                          <div>
                            <span className=" badge rounded-pill bg-success" style={{fontSize: '8px'}}>
                            PLAN { plann?.name.toUpperCase() }
                            </span>
                          </div>
                        </div>
                        <div className="col p-0 text-end">
                          <img src={IconDinner} width="30%" alt="dinner"/>
                        </div>
                        <hr className="mt-3 home-sub-title"/>
                        <div>
                          <img src={ plann.beneficios.zone ? IconHeartActive: IconHeartDes } width="15px" alt="heart"/>
                          <span className={ `fw-bold ${ plann.beneficios.zone ? '' : 
                          'text-decoration-line-through' }`}>Lima</span> 
                          <span className="home-sub-title" style={{fontSize: '12px'}}>(zona de cobertura)</span>
                        </div>
                        <div className="mt-3">
                          <img src={ plann.beneficios.red ? IconHeartActive: IconHeartDes } width="15" alt="heart"/>
                          <span className={ `fw-bold ${ plann.beneficios.red ? '' : 
                          'text-decoration-line-through' }`}>+30 clínicas </span>
                          <span className="home-sub-title" style={{fontSize: '12px'}}>(en red afiliada)</span>
                        </div>
                        <div className="mt-3">
                          <img src={ plann.beneficios.medico ? IconHeartActive: IconHeartDes } width="15" alt="heart"/>
                          <span className={ `fw-bold ${ plann.beneficios.medico ? '' : 
                          'text-decoration-line-through' }`} style={{fontSize: '13px'}}>Médico a docimilio </span>
                          <span className="home-sub-title" style={{fontSize: '12px'}}></span>
                        </div>
                        <div className="mt-3">
                          <img src={ plann.beneficios.chequeo ? IconHeartActive: IconHeartDes } width="15" alt="heart"/>
                          <span className={ `fw-bold ${ plann.beneficios.chequeo ? '' : 
                          'text-decoration-line-through' }`} style={{fontSize: '13px'}}>Chequeos preventivos</span>
                          <span className="home-sub-title" style={{fontSize: '12px'}}></span>
                        </div>
                        <div className="mt-3">
                          <img src={ plann.beneficios.reembolsoNacional ? IconHeartActive: IconHeartDes } width="15" alt="heart"/>
                          <span className={ `home-sub-title ${ plann.beneficios.reembolsoNacional ? '' : 
                          'text-decoration-line-through' }`} style={{fontSize: '12px'}}>
                            Reembolso nacional
                          </span>
                          <span className="home-sub-title" style={{fontSize: '12px'}}></span>
                        </div>
                        <div className="mt-3">
                          <img src={ plann.beneficios.reembolsoInternacional ? IconHeartActive: IconHeartDes } width="15" alt="heart"/>
                          <span style={{fontSize: '12px'}} className={ `home-sub-title ${ plann.beneficios.reembolsoInternacional ? '' : 
                          'text-decoration-line-through' }`}>
                            Reembolso internacional
                          </span>
                          <span className="home-sub-title" style={{fontSize: '12px'}}></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="home-sub-title mt-3">Revisa nuestros</div>
                  <div className="text-rimac">servicios y exclusiones</div>

                  <div className="accordion accordion-flush mt-3" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne" style={{width: '100%'}}>
                        <button className="accordion-button collapsed p-2 py-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Servicios brindados
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo" style={{width: '100%'}}>
                        <button className="accordion-button collapsed p-2 py-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Exclusiones
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col p-0 text-end">
                  <button className="btn btn-link" style={{fontSize: '10px'}}>
                    ENVIAR COTIZACIÓN POR CORREO
                  </button>
                </div>
                <div className="col p-0 text-end">
                  <button className="btn btn_comprar btn-sm text-white" onClick={ handleClickComprarPlan }>
                    COMPRAR PLAN
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
