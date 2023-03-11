export default function TableRow(props) {
  return(
    <div 
      className="row"
      style={{gridTemplateColumns: props.gridTemplateColumns}}
    >

      {props.data.map((datum, index) => {
        return(
          <div key={index} className="item">{datum}</div>
        )
      })}

    </div>
  )
}