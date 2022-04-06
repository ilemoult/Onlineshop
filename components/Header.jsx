import Navigation from './Navigation';
import Basket from './Basket';
import Selection from './Selection';
import Search from './Search';

import React, { useState } from 'react';

export default function Header() {

 /*  // Hooks
  const [keyWord, setKeyWord] = useState('search') // + 'search' soll bei onfocus verschwinden und durch '' ersetzt werden

  // Konstanten/ Variablen
  const foundProducts = filterProducts({products}, setKeyWord) // Gefilterte Proodukte kommen zurück und werden in search gespeichert
 */
  return (
    <header className="site-header">
      <Search /* keyWord={keyWord} setKeyWord={setKeyWord} */ />
      <Navigation />
      <Selection />
      <Basket />
    </header>
  );
}

/* function filterProducts({products}, setKeyWord){

// ignoriere Groß- und Kleinschreibung
const keywordRegExp = new RegExp(setKeyWord, 'i');

// Gebe die Produkte zurück, wo setKeyWord (Value) wortgleich mit title, produktgruppe oder color aus products.jsx übereinstimmt
return products.filter((searchfor) => searchfor.keywordRegExp.test({title, produktgruppe, color} === setKeyWord));

}; */