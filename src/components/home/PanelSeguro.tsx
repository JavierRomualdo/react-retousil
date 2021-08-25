import IconShield from '../../assets/images/gl_shield-20x20.png';
import IconPhono from '../../assets/images/gl_mobile-20x20.png';
import IconMoney from '../../assets/images/icon-money.png';
import IconClinic from '../../assets/images/icon-clinica.png';
import ImageIllustration from '../../assets/images/Illustration-1.png';


export const PanelSeguro = () => {
  return (
    <>
      <div className="home__content">
        <div className="home__beneficios">
          <div className="title-white">
            <h1>
              <div style={{verticalAlign: 'inherit'}}>
                <div style={{verticalAlign: 'inherit'}}>Seguro de</div>
              </div>
              <b>
                <div style={{verticalAlign: 'inherit'}}>
                  <div style={{verticalAlign: 'inherit'}}>
                    Salud
                  </div>
                </div>
              </b>
            </h1>
            {/* <div>
                <div style={{verticalAlign: 'inherit'}}>
                    <div style={{verticalAlign: 'inherit'}}>Cotiza de manera
                    </div>
                </div>
                <strong>
                    <div style={{verticalAlign: 'inherit'}}>
                        <div style={{verticalAlign: 'inherit'}}>fácil y rápida:</div>
                    </div>
                </strong>
            </div> */}
          </div>

          <ul>
            <div className="hide-desktop">
              <div className="slick-slider slick-initialized" dir="ltr">
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{opacity: '1', transform: 'translate3d(0px, 0px, 0px)'}}
                  >
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      tabIndex={-1}
                      aria-hidden="false"
                      style={{outline: 'none', width: "0px"}}
                    >
                      <div>
                        <li
                          className="home__items"
                          tabIndex={-1}
                          style={{width: '100%', display: 'inline-block'}}>
                          <img
                            width="24"
                            height="24"
                            src={IconShield}
                            alt="shield"
                          />
                          <span>
                            <div style={{verticalAlign: 'inherit'}}>
                              <div style={{verticalAlign: 'inherit'}}>
                                Más de 300 clínicas en todo el Perú
                              </div>
                              </div>
                          </span>
                        </li>
                      </div>
                    </div>
                    <div
                      data-index="1"
                      className="slick-slide"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{outline: 'none', width: "0px"}}>
                        <div>
                          <li
                            className="home__items"
                            tabIndex={-1}
                            style={{display: 'inline-block', width: "100%"}}>
                            <img
                              width="24"
                              height="24"
                              src="/content/dam/rimac/ami/home/icon-money.png"
                              alt=""/>
                            <span>
                              <div style={{verticalAlign: 'inherit'}}>
                                <div style={{verticalAlign: 'inherit'}}>
                                  Hasta S / 12 millones de cobertura anual
                                </div>
                              </div>
                            </span>
                          </li>
                        </div>
                      </div>
                    <div
                      data-index="2"
                      className="slick-slide"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{outline: 'none', width: "0px"}}>
                      <div>
                        <li
                          className="home__items"
                          tabIndex={-1}
                          style={{width: '100%', display: "inline-block"}}>
                            <img
                              width="24"
                              height="24"
                              src="/content/dam/rimac/ami/home/icon-benefit.png"
                              alt=""/>
                            <span>
                              <div style={{verticalAlign: 'inherit'}}>
                                <div style={{verticalAlign: 'inherit'}}>
                                  Cotiza tu seguro 100% digital
                                </div>
                              </div>
                            </span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="arrows hide-desktop">
              <button className="arrow-beneficios-prev icon-arrow-left-light">
              </button>
              <div className="contador">
                <div className="currentpage">
                  <div style={{verticalAlign: 'inherit'}}>
                    <div style={{verticalAlign: 'inherit'}}>0 </div>
                  </div>
                  <div style={{verticalAlign: 'inherit'}}>
                    <div style={{verticalAlign: 'inherit'}}>1</div>
                  </div>
                </div>
                <div style={{verticalAlign: 'inherit'}}>
                  <div style={{verticalAlign: 'inherit'}}>/</div>
                </div>
                <div className="pages">
                  <div style={{verticalAlign: 'inherit'}}>
                    <div style={{verticalAlign: 'inherit'}}>0 </div>
                  </div>
                  <div style={{verticalAlign: 'inherit'}}>
                    <div style={{verticalAlign: 'inherit'}}>3</div>
                  </div>
                </div>
              </div>
              <button className="arrow-beneficios-next icon-arrow-right-light"></button>
            </div>
            <div className="hide-tablet-on-down">
              <li className="home__items">
                <img
                  width="24"
                  height="24"
                  src={ IconShield }
                  alt="shield"/>
                <span>
                  <div style={{verticalAlign: 'inherit'}}>
                    <div style={{verticalAlign: 'inherit'}}>
                      Cómpralo de manera fácil y rápida
                    </div>
                  </div>
                </span>
              </li>
              <li className="home__items">
                <img
                  width="24"
                  height="24"
                  src={ IconPhono }
                  alt="phono"/>
                  <span>
                    <div style={{verticalAlign: 'inherit'}}>
                      <div style={{verticalAlign: 'inherit'}}>
                        Cotiza y compra tu seguro 100% digital
                      </div>
                    </div>
                  </span>
                </li>

                <li className="home__items">
                <img
                  width="24"
                  height="24"
                  src={ IconMoney }
                  alt=""/>
                  <span>
                    <div style={{verticalAlign: 'inherit'}}>
                      <div style={{verticalAlign: 'inherit'}}>Hasta S / 12 millones de cobertura anual
                      </div>
                    </div>
                  </span>
                </li>
                <li className="home__items">
                <img
                  width="24"
                  height="24"
                  src={IconClinic}
                  alt="clinica"/>
                <span>
                  <div style={{verticalAlign: 'inherit'}}>
                    <div style={{verticalAlign: 'inherit'}}>
                      Más de 300 clínicas en todoel Perú
                    </div>
                  </div>
                </span>
              </li>
            </div>
          </ul>
          <div className="footer">&copy; 2021 ;y Company</div>
          <div className="ad-inline">
            <div className="legal">
              <div style={{verticalAlign: 'inherit'}}>
                <div style={{verticalAlign: 'inherit'}}>CONOCE MÁS</div>
              </div>
            </div>
            <i className="icon-arrow-white-down"></i>
          </div>
        </div>
      </div>

      <div className="home__img">
        <img
          src={ ImageIllustration }
          alt="sadsadasdasdas"/>
      </div>
    </>
  )
}
