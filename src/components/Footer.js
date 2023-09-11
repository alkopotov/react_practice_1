import Description from './Description'
import Pict from './images/velo1.png'
export default function Footer() {
  let headerContent = 'Прокат велосипедов'
  let textContent = 'У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!'
  return (
    <div className='footer__content'>
      <img src={Pict} alt='Велосипеды' style={{height: '800px'}}/>
      <Description header={headerContent} text={textContent} classId='footer__description'/>
    </div>
  )
}