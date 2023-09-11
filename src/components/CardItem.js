export default function CardItem(props) {
  let {text, color} = props;

  return (
    <div className='card__item' style={{backgroundColor: color}}>
      <hr/>
      <h2 style={{color: 'white', fontWeight: 300, marginTop: '50px', fontSize: '30px'}}>{text}</h2>
    </div>
  )
}