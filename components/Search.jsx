import React, { useState } from 'react';

export default function Search() {

  const [value, setValue] = useState("search");
  function startSearch(){
    setValue('');
  };

  return (
    <input className="search" type="text" value={value} onClick={startSearch} />
  )
}
