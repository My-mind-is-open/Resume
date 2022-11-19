
import './App.css';
import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Filter from './components/Filter';
import { motion, AnimatePresence } from 'framer-motion';


function App() {


  const [popular, setPopular] = useState([]);
  const [filrered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular()
  }, []);

  useEffect(() => {
    alert('Сайт, с которого я взял API доступен только с впн, пожалуйста включите впн и сможете посмотреть проект😉😉😉')
  }, [])


  const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=e48c48093db9b03523736ad5f32f5cbd&language=en-US&page=1'
    )

    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results)
  }

  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout

        className="popular-movies">
        <AnimatePresence>
          {filrered.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
