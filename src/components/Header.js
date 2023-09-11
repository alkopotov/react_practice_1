import Description from "./Description";
import Menu from "./Menu";
import Pict from './images/croc.svg'


export default function Header(){
  let headerContent = 'Веломастерская “Велозар”'
  let textContent = 'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.'
  return(
    <div className="header">
      <Menu />
      <div className="header__banner">
        <Description header={headerContent} text={textContent} classId='header__banner__decription'/>
        <img src={Pict} alt="Крокодил на велосипеде" style={{height: '533px', width: '543px'}}/>
      </div>
    </div>
  )
}