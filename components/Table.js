import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import React from "react";

export default function Table(props) {
  const numCols = props.headers.length;
  const columnWidth = `${Math.floor(100 / numCols)}%`;
  const gridTemplateColumns = `${columnWidth} `.repeat(numCols)

  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = React.useState(1);

  const [dataSubset, setDataSubset] = React.useState(props.data.slice(0, itemsPerPage))

  const numItems = props.data.length,
    numPages = Math.ceil(numItems / itemsPerPage);

  const updatePage = (pageNumber) => {
    let offset = pageNumber * itemsPerPage;

    setCurrentPage(pageNumber);
    setDataSubset(props.data.slice(offset - itemsPerPage, offset))
  };

  React.useEffect(() => {
    let offset = currentPage * itemsPerPage;
    setDataSubset(props.data.slice(offset - itemsPerPage, offset))
  }, [props.data])

  return(
    <div className="table-container">
      <header className="title">
        <h1>{props.name}</h1>
        <button type='button' style={{ cursor: 'pointer' }} onClick={props.refresh}>Refresh</button>
      </header>

      <div className="table">
        <TableHeader 
          headers={props.headers}
          gridTemplateColumns={gridTemplateColumns}
        />

        {
          dataSubset.map((datum, index) => {
            return(
              <TableRow
                key={index}
                data={datum}
                gridTemplateColumns={gridTemplateColumns}
              />
            )
          })
        }

        <TableFooter
          currentPage={currentPage}
          numPages={numPages}
          updatePage={updatePage}
        />
      </div>
    </div>
  )
}