import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./components/Navbarr";
import CarrouselSec from "./components/CarrouselSec";
import MoviesList from "./components/MoviesList";
import React, { useState } from "react";

function App() {
  const [movies, setmovies] = useState([
    {
      name: "Deadpool & Wolverine",
      posterurl:
        "https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg",
      date: "2024",
      rating: 4,
    },
    {
      name: "The Marvels",
      posterurl: "https://cdn.marvel.com/content/1x/themarvels_lob_crd_05.jpg",
      date: "2023",
      rating: 3,
    },
    {
      name: "Guardians of the Galaxy Vol. 3",
      posterurl:
        "https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg",
      date: "2023",
      rating: 5,
    },
    {
      name: "Ant-Man and The Wasp: Quantumania",
      posterurl:
        "https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg",
      date: "2023",
      rating: 3,
    },
    {
      name: "Black Panther: Wakanda Forever",
      posterurl:
        "https://cdn.marvel.com/content/1x/blackpantherwakandaforever_lob_crd_06.jpg",
      date: "2022",
      rating: 3,
    },
    {
      name: "Thor: Love and Thunder",
      posterurl:
        "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
      date: "2022",
      rating: 2,
    },
    {
      name: "Doctor Strange in the Multiverse of Madness",
      posterurl:
        "https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
      date: "2022",
      rating: 4,
    },
    {
      name: "Spider-Man: No Way Home",
      posterurl:
        "https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg",
      date: "2021",
      rating: 5,
    },
    {
      name: "Eternals",
      posterurl: "https://cdn.marvel.com/content/1x/eternals_lob_crd_06.jpg",
      date: "2021",
      rating: 3,
    },
    {
      name: "Shang-Chi and The Legend of The Ten Rings",
      posterurl: "https://cdn.marvel.com/content/1x/shangchi_lob_crd_07.jpg",
      date: "2021",
      rating: 5,
    },
    {
      name: "Black Widow",
      posterurl: "https://cdn.marvel.com/content/1x/blackwidow_lob_crd_06.jpg",
      date: "2021",
      rating: 4,
    },
    {
      name: "Spider-Man: Far From Home",
      posterurl:
        "https://cdn.marvel.com/content/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
      date: "2019",
      rating: 4,
    },
    {
      name: "Avengers: Endgame",
      posterurl:
        "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05_2.jpg",
      date: "2019",
      rating: 5,
    },
    {
      name: "Captain Marvel",
      posterurl:
        "https://cdn.marvel.com/content/1x/captainmarvel_lob_crd_06.jpg",
      date: "2019",
      rating: 3,
    },
    {
      name: "Ant-Man and The Wasp",
      posterurl:
        "https://cdn.marvel.com/content/1x/ant-manthewasp_lob_crd_01.jpg",
      date: "2018",
      rating: 4,
    },
    {
      name: "Avengers: Infinity War",
      posterurl:
        "https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg",
      date: "2018",
      rating: 5,
    },
    {
      name: "Black Panther",
      posterurl:
        "https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01_4.jpg",
      date: "2018",
      rating: 5,
    },
    {
      name: "Thor: Ragnarok",
      posterurl:
        "https://cdn.marvel.com/content/1x/thorragnarok_lob_crd_03.jpg",
      date: "2017",
      rating: 5,
    },
    {
      name: "Spider-Man: Homecoming",
      posterurl:
        "https://cdn.marvel.com/content/1x/spider-manhomecoming_lob_crd_02.jpg",
      date: "2017",
      rating: 4,
    },
    {
      name: "Guardians of the Galaxy Vol. 2",
      posterurl:
        "https://cdn.marvel.com/content/1x/guardiansofthegalaxyvol.2_lob_crd_01.jpg",
      date: "2017",
      rating: 5,
    },
    {
      name: "Doctor Strange",
      posterurl:
        "https://cdn.marvel.com/content/1x/doctorstrange_lob_crd_01_6.jpg",
      date: "2016",
      rating: 5,
    },
    {
      name: "Captain America: Civil War",
      posterurl:
        "https://cdn.marvel.com/content/1x/captainamericacivilwar_lob_crd_01_9.jpg",
      date: "2016",
      rating: 5,
    },
    {
      name: "Ant-Man",
      posterurl: "https://cdn.marvel.com/content/1x/ant-man_lob_crd_01_8.jpg",
      date: "2015",
      rating: 4,
    },
    {
      name: "Guardians of the Galaxy",
      posterurl:
        "https://cdn.marvel.com/content/1x/avengersageofultron_lob_crd_03.jpg",
      date: "2014",
      rating: 5,
    },
    {
      name: "Captain America: The Winter Soldier",
      posterurl:
        "https://cdn.marvel.com/content/1x/captainamericathewintersoldier_lob_crd_01_1.jpg",
      date: "2014",
      rating: 5,
    },
    {
      name: "Thor: The Dark World",
      posterurl:
        "https://cdn.marvel.com/content/1x/thorthedarkworld_lob_crd_02_1.jpg",
      date: "2013",
      rating: 5,
    },
    {
      name: "Iron Man 3",
      posterurl: "https://cdn.marvel.com/content/1x/ironman3_lob_crd_01_10.jpg",
      date: "2013",
      rating: 5,
    },
    {
      name: "The Avengers",
      posterurl: "https://cdn.marvel.com/content/1x/theavengers_lob_crd_03.jpg",
      date: "2012",
      rating: 5,
    },
    {
      name: "Captain America: The First Avenger",
      posterurl:
        "https://cdn.marvel.com/content/1x/captainamerica_lob_crd_01.jpg",
      date: "2011",
      rating: 5,
    },
    {
      name: "Thor",
      posterurl: "https://cdn.marvel.com/content/1x/thor_lob_crd_01.jpg",
      date: "2011",
      rating: 5,
    },
    {
      name: "Iron Man 2",
      posterurl: "https://cdn.marvel.com/content/1x/ironman2_lob_crd_01_3.jpg",
      date: "2010",
      rating: 5,
    },
    {
      name: "The Incredible Hulk",
      posterurl:
        "https://cdn.marvel.com/content/1x/theincrediblehulk_lob_crd_03.jpg",
      date: "2008",
      rating: 5,
    },
    {
      name: "Iron Man",
      posterurl: "https://cdn.marvel.com/content/1x/ironman_lob_crd_01_3.jpg",
      date: "2008",
      rating: 5,
    },
  ]);
  const [text, settext] = useState("")
  return (
    <div className="App">
      <Navbarr settext={settext} movies={movies} setmovies={setmovies}/>
      <CarrouselSec/>
      <MoviesList movies={movies} setmovies={setmovies} text={text}/>

    </div>
  );
}

export default App;
