import React, { useState } from "react";
import "./styles.css";

const movieList = {
  Comedy: [
    {
      name: "Ted",
      rating: "4/5",
      about:
        "A wish comes true for John when his teddy bear, Ted, comes to life. When he plans to move in with his girlfriend, Ted, who is not prepared for the change, unintentionally ruins their relationship."
    },

    {
      name: "21 Jump Street",
      rating: "4.5/5",
      about:
        "Schmidt and Jenko are high school friends who go on to become police officers. The two friends go undercover as students in order to bust a drug ring and find the source of a synthetic drug."
    },

    {
      name: "The Mask",
      rating: "3.5/5",
      about:
        "Stanley, a meek bank employee, turns into an eccentric and maniacal green-skinned superhero who can bend reality, after wearing a wooden mask that was created by Loki, the Norse god of mischief."
    }
  ],

  Crime: [
    {
      name: "Man on Fire",
      rating: "4.5/5",
      about:
        "John, an ex-CIA officer, is entrusted with the responsibility of safeguarding an entrepreneur's daughter. When the girl gets kidnapped, John vows to seek revenge."
    },

    {
      name: "Army of Thieves",
      rating: "3.5/5",
      about:
        "In this prequel to Army of the Dead, a mysterious woman recruits bank teller Dieter to assist in a heist of impossible-to-crack safes across Europe."
    },

    {
      name: "El Camino: A Breaking Bad Movie",
      rating: "5/5",
      about:
        "After a dramatic escape from captivity, Jesse Pinkman must deal with his past in order to make some kind of future for himself."
    }
  ],
  Sciencefiction: [
    {
      name: "Dune",
      rating: "4/5",
      about:
        "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource."
    },

    {
      name: "Avatar",
      rating: "5/5",
      about:
        "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie."
    },

    {
      name: "The Matrix",
      rating: "4/5",
      about:
        "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix."
    }
  ]
};

export default function App() {
  var [genre, setgenre] = useState("Comedy");

  function genreHandler(genre) {
    setgenre(genre);
  }

  return (
    <div className="App">
      <nav className="header">
        <h1>
          <span>🎥</span> Movie Recommendation App
        </h1>
        <small>A list of recommended movies seperated by genres.</small>
      </nav>
      <div>
        {Object.keys(movieList).map((genre) => (
          <button onClick={() => genreHandler(genre)} className="buttonStyle">
            {genre}
          </button>
        ))}
      </div>

      <hr style={{ width: "70%" }}></hr>

      <ul style={{ listStyle: "none" }}>
        {movieList[genre].map((film) => (
          <li key={film.name}>
            <div className="container container-center ">
              <h2 style={{ textAlign: "center", fontSize: "x-large" }}>
                {film.name}
              </h2>
              <h3 style={{ textAlign: "center" }}>Rating: {film.rating}</h3>
              <p style={{ textAlign: "justify" }}>{film.about}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
