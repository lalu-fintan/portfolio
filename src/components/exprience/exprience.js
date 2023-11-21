import { exprience } from '../../portfolio'
import './exprience.css'

const Exprience = () => (
  <section id='exprience' className='section'>
    <h2 className='section__title'>Exprience</h2>

    <div className='exp-container'>
      <div className='left-half'>
        <h3>Foss Freaks</h3>
        <h5 className='role'>NodeJS Developer</h5>
        <span className='duration'>(2021 - present)</span>
      </div>
      <>
        <span className='line' />
      </>
      <div className='right-half'>
        {exprience.map((item) => (
          <ul key={item} className='exp-list'>
            <li className='exp-list-item'>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  </section>
)

export default Exprience
