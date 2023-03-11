export default function TableHeader(props) {
  return(
    <div className="header" style={{gridTemplateColumns: props.gridTemplateColumns}}>
      {props.headers.map((title, index) => {
        return <div className="item" key={index}>{title}</div>
      })}
    </div>
  )
}