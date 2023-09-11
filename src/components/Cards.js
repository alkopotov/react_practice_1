import CardItem from "./CardItem"

export default function Cards(){
  let data = [
    {id: '1', content: 'Годовое ТО', color: '#22356F'},
    {id: '2', content: 'Выравнивание колес', color: '#0052C1'},
    {id: '3', content: 'Настройка переключателей', color: '#76B58B'}
  ]
  return(
    <div className="cards">
      {data.map(elem => 
        <CardItem key={elem.id} text={elem.content} color={elem.color}/>
        )}
    </div>
  )
}