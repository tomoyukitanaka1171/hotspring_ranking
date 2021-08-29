import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Hotspring from './Hotspring';
import './reset.css';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function SearchForm () {
  const [hotspring, setHotspring] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('onsen');

  useEffect(() => {
    getHotSpring();
  }, [query])

  const getHotSpring = async () => {
    const responce = await fetch(`https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426?format=json&genre=${query}&applicationId=1092399889067363234`);
    const data = await responce.json();
    const hotels = data.Rankings[0].Ranking.hotels
    console.log(hotels);
    setHotspring(hotels)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="inner">
    <form onSubmit={getSearch} className="search-form">
     <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
     <button className="search-button" type="submit">
       <span>検索<i><FontAwesomeIcon  icon={faSearch} /></i></span>
     </button>
    </form>
    <h2>温泉検索結果</h2>
    <section class="section-main">
    {hotspring.map(hotspring =>(
      <Hotspring title={hotspring.hotel.hotelName} pref={hotspring.hotel.middleClassName} rank={hotspring.hotel.rank} image={hotspring.hotel.hotelImageUrl} rev={hotspring.hotel.userReview}/>
    ))}
    </section>
    </div>
  )
};

ReactDOM.render(<SearchForm />, document.getElementById("root"));
