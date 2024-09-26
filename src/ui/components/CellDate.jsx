import React from "react"

export const CellDate = ({date}) => {

  if(!date) return <td className="cell-table-almoxarifado" >*</td>


  const dateObj = new Date(date);

  return (
    <td className="cell-table-almoxarifado">
      <h5>{dateObj.getDate()}/{dateObj.getMonth()}</h5>
      <h6>{dateObj.getHours()}:{dateObj.getMinutes()}</h6>
    </td>
  )
}
