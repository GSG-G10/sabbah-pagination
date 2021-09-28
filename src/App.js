import { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [query, setQuery] = useState('cat')

  useEffect(() => {
    setIsLoaded(false)
    fetch(`https://api.unsplash.com/search/collections?page=${page}&limit=10&query=${query}&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
    .then(res => res.json())
    .then(data => data.results)
    .then(results => {
      setIsLoaded(true)
      return results.map(ele => {
        return ele.cover_photo.urls.regular
      })
    } )
    .then(data => setData(data))
  },[page, query])
  
  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <Main states={{data, setPage, isLoaded}} />
    </div>
  );
}

export default App;
