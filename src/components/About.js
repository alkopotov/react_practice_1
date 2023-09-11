import Description from './Description'
import Pict from './images/velo2.png'

export default function About() {
 let headerContent = 'Что мы предлагаем'
 let textContent = 'В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой.'
 let data = ['Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.',
 'А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.']

  return(
    <div>
      <div className='about'>
       <Description header={headerContent} text={textContent}   classId='about__description'/>
        <img src={Pict} alt="Велосипеды"/>
      </div>
      <div className='about__list'>
        {data.map((elem, index) =>
        <p key={index} className='about__text'>{elem}</p>
        )}
      </div>
    </div>
  )
}