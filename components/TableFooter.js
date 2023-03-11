export default function TableFooter(props) {
  let pages =  Array.from(Array(props.numPages + 1).keys());
  pages.shift();

  return(
    <div className="footer">
      {
        pages.map((page) => {
          return(
            <div className="page-number" key={page} onClick={() => { props.updatePage(page) }}>
              {page}
            </div>
          )
        })
      }
    </div>
  )
}