export default function Description(props) {
  let {header, text, classId} = props;
  return (
    <div className={classId}>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  )

}