import Logo from './images/logo.png'

export default function Menu() {
let menu_items = ['О нас', 'Услуги', 'Аренда']

  return(
    <div className='menu'>
      <img src={Logo} alt='Logo' style={{width: '118px'}}/>
      <div className='menu__links'>
        {menu_items.map((elem, index) => 
          <a key={index} href=''>{elem}</a>)}
      </div>
      <button>Связаться</button>
    </div>
   
  )
}