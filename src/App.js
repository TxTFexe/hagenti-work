import React from "react";
import Card from "./Components/Card";
import Search from "./Components/Search";

export const SearchContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = React.useState('');

  const [ads, setAds] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6395a92790ac47c680703bcd.mockapi.io/Ads')
    .then(res => {
        return res.json();
    })
    .then((arr) => {
      setAds(arr);
    })
  }, [])

  const items = ads.filter(obj => {
    if(obj.name.toLowerCase().includes(searchValue.toLowerCase())){
        return true;
    }

    return false;
  }).map((obj) => (<Card key={obj.id} id={obj.id} title={obj.name} number={obj.number}/>))

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="container">
        <header>
            <h1>Hagenti Work</h1>
            <Search/>
        </header>
        <div>
            <div className="ad__grid">
                {items}
            </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
