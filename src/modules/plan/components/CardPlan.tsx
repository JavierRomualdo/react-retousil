

import IconCircle from '../../../assets/images/icon-circle.svg';
import IconCorrect from '../../../assets/images/gl_correct.png';


export const CardPlan = ({ plan, planSelect, handleClick }: any) => {

  return (
    <div className="col ps-0">
      <div className={ `card ${planSelect.key === plan.key ? 'border border-success': ''}`} style={{cursor:'pointer'}}
        onClick={ () => { handleClick(plan) } }>
        <div className="card-body px-2 pt-1">
          <div className="text-end" >
            {
              planSelect.key === plan.key ? 
              <img src={ IconCorrect } alt="none" width="15"/> : 
              <img src={ IconCircle } alt="none" />
            }
            
          </div>
            <div style={{fontSize: '10px', fontWeight: 'bold'}}>{plan?.name.toLocaleUpperCase()}</div>
          <div>S/ <strong style={{fontSize: '25px', fontWeight: 'bold'}}>{plan?.monto}</strong></div>
          <div>mensual</div>
        </div>
      </div>
    </div>
  )
}
