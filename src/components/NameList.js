import React from 'react'

function NameList() {
    const names=['bhanu','teja','teja']
    const nameList = names.map((names,index) => <h2 key={index}>{index}{names}</h2>)
  return <div>{nameList}</div>
}

export default NameList
