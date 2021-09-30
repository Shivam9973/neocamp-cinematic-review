import React, { useState } from "react";
import "./styles.css";

const movies = {
  harrypotter: [
    {
      name: "Harry Potter and The Sorcerer's Stone",
      description:
        "Harry Potter and the Sorcerer's Stone is a British-American fantasy film based on the first novel by J. K. Rowling, released on 16 November, 2001. It is directed by Chris Columbus, written by Steve Kloves, and produced by David Heyman. The film stars Daniel Radcliffe, Rupert Grint, Emma Watson, John Cleese, Robbie Coltrane, Richard Griffiths, Richard Harris, Ian Hart, John Hurt, Alan Rickman, Fiona Shaw, Maggie Smith, Sean Biggerstaff, Warwick Davis, Julie Walters, ZoÃ« Wanamaker, David Bradley, and Tom Felton.",
      rating: "4/5"
    },
    {
      name: "Harry Potter and The Chamber of Secrets",
      description:
        "Its story follows Harry's second year at Hogwarts School of Witchcraft and Wizardry as the Heir of Salazar Slytherin opens the Chamber of Secrets, unleashing a monster that petrifies the school's denizens.The cast of the first film returned for the sequel, with the additions of Kenneth Branagh, Jason Isaacs, and Gemma Jones, among others. It was the last film to feature Richard Harris as Professor Albus Dumbledore, due to his death that same year. Principal photography began in November 2001, only three days after the release of the first film. It was shot at Leavesden Film Studios and historic buildings around the United Kingdom, as well as on the Isle of Man. Filming concluded in July 2002",
      rating: "4.1/5"
    },
    {
      name: "Harry Potter and The Prisoner of Azkaban",
      description:
        "The film follows Harry's third year at Hogwarts and his quest to uncover the truth about his past, including the connection recently-escaped Azkaban prisoner Sirius Black has to Harry and his late parents. With Prisoner of Azkaban, production of the Harry Potter films switched to an eighteen-month cycle.",
      rating: "4.2/5"
    },
    {
      name: "Harry Potter and The Goblet of Fire ",
      description:
        "The fourth movie in the Harry Potter franchise sees Harry (Daniel Radcliffe) returning for his fourth year at Hogwarts School of Witchcraft and Wizardry, along with his friends, Ron (Rupert Grint) and Hermione (Emma Watson). There is an upcoming tournament between the three major schools of magic, with one participant selected from each school by the Goblet of Fire. When Harry's name is drawn, even though he is not eligible and is a fourth player, he must compete in the dangerous contest.",
      rating: "4.5/5"
    },
    {
      name: "Harry Potter and The Order of The Pheonix ",
      description:
        "Now in his fifth year at Hogwarts, Harry (Daniel Radcliffe) learns that many in the wizarding community do not know the truth of his encounter with Lord Voldemort. Cornelius Fudge, minister of Magic, appoints his toady, Dolores Umbridge, as Defense Against the Dark Arts teacher, for he fears that professor Dumbledore will take his job. But her teaching is deficient and her methods, cruel, so Harry prepares a group of students to defend the school against a rising tide of evil.",
      rating: "4.1/5"
    },
    {
      name: "Harry Potter and The Half-Blood Prince",
      description:
        "As Death Eaters wreak havoc in both Muggle and Wizard worlds, Hogwarts is no longer a safe haven for students. Though Harry (Daniel Radcliffe) suspects there are new dangers lurking within the castle walls, Dumbledore is more intent than ever on preparing the young wizard for the final battle with Voldemort. Meanwhile, teenage hormones run rampant through Hogwarts, presenting a different sort of danger. Love may be in the air, but tragedy looms, and Hogwarts may never be the same again.",
      rating: "4.3/5"
    },
    {
      name: "Harry Potter and the Deathly Hallows Part 1",
      description:
        "Without the guidance and protection of their professors, Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) begin a mission to destroy the Horcruxes, the sources of Voldemort's immortality. Though they must rely on one another more than ever, dark forces threaten to tear them apart. Voldemort's Death Eaters have seized control of the Ministry of Magic and Hogwarts, and they are searching for Harry -- even as he and his friends prepare for the ultimate showdown.",
      rating: "4.7/5"
    },
    {
      name: "Harry Potter and the Deathly Hallows Part 2",
      description:
        "A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of evil. The friends must search for the Horcruxes that keep the dastardly wizard immortal. Harry and Voldemort meet at Hogwarts Castle for an epic showdown where the forces of darkness may finally meet their match. My one of the fav part ",
      rating: "5/5"
    }
  ],
  spykids: [
    {
      name: "Spy Kids",
      description:
        "Two young kids become spies in attempt to save their parents, who are ex-spies, from an evil mastermind. Armed with a bag of high tech gadgets and out-of-this world transportation, Carmen (Alexa Vega) and Juni (Daryl Sabara) will bravely jet through the air, dive under the seas and crisscross the globe in a series of thrilling adventures on a mission to save their parents ... and maybe even the world.",
      rating: "5/5"
    },
    {
      name: "Spy Kids 2: The Island of Lost Dreams",
      description:
        "Spy Kids 2: The Island of Lost Dreams is a 2002 American spy action comedy adventure film produced, written, shot, edited and directed by Robert Rodriguez, co-produced by Elizabeth Avellán and starring Antonio Banderas, Carla Gugino, Alexa Vega, Daryl Sabara, Mike Judge, Ricardo Montalbán, Holland Taylor, Christopher McDonald, Danny Trejo, Cheech Marin, and Steve Buscemi.",
      rating: "4.5/5"
    },
    {
      name: "Spy Kids 3-D: Game Over",
      description:
        "Juni Cortez, 3 years after the events of the second film, has retired from the OSS and now lives quietly, working as a private detective, though on a miniscule salary. One day, he is contacted by President Devlin, former head of OSS, who informs him that his sister, Carmen Cortez, is missing after a mission gone wrong.",
      rating: "4/5"
    },
    {
      name: "Spy Kids 4-D: All the Time in the World",
      description:
        "Spy Kids: All the Time in the World (also known as Spy Kids 4-D: All the Time in the World) is a 2011 American 4D spy mystery action comedy film written and directed by Robert Rodriguez. It is the fourth and final installment in the Spy Kids film series, and is a stand-alone sequel to 2003's Spy Kids 3-D: Game Over. The film stars Jessica Alba, Joel McHale, Alexa Vega, Daryl Sabara, Rowan Blanchard, Mason Cook, Ricky Gervais, and Jeremy Piven. It is the only film in the series without the participation of Antonio Banderas or Carla Gugino and not to be distributed by Miramax Films"
    }
  ],
  htyd: [
    {
      name: "How to Train Your Dragon",
      description:
        "Hiccup (Donald Reignoux) is a Norse teenager from the island of Berk, where fighting dragons are a way of life. His progressive views and weird sense of humor make him a misfit, despite the fact that his father (Emmanuel Jacomy) is chief of the clan. Tossed into dragon-fighting school, he endeavors to prove himself as a true Viking. When he befriends an injured dragon he names Toothless, he has the chance to plot a new course for his people's future.",
      rating: "4.5/5"
    },
    {
      name: "How to Train Your Dragon 2",
      description:
        "Five years have passed since Hiccup and Toothless united the dragons and Vikings of Berk. Now, they spend their time charting the island's unmapped territories. During one of their adventures, the pair discover a secret cave that houses hundreds of wild dragons -- and a mysterious dragon rider who turns out to be Hiccup's long-lost mother, Valka (Cate Blanchett). Hiccup and Toothless then find themselves at the center of a battle to protect Berk from a power-hungry warrior named Drago.",
      rating: "4.8/5"
    },
    {
      name: "How to Train Your Dragon: The Hidden World ",
      description:
        "All seems well on the island of Berk as Vikings and dragons live together in peace and harmony. Now a Viking leader, Hiccup finds himself increasingly attracted to Astrid, while his beloved dragon Toothless meets an enchanting creature who captures his eye. When the evil Grimmel launches a devious plan to wipe out all the dragons, Hiccup must unite both clans to find Caldera, a hidden land that holds the key to saving Toothless and his flying friends.",
      rating: "5/5"
    }
  ]
};

var films = Object.keys(movies);

export default function App() {
  const [genre, setGenre] = useState("harrypotter");

  function bookClickHandler(genre) {
    // processing
    console.log(genre);
    setGenre(genre); // react call to show output
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="movies">
          🎥
        </span>{" "}
        movies
      </h1>
      <p>explore your genre.</p>
      {/* Actual output set by React using useState */}

      {films.map((genre) => {
        return (
          <button
            onClick={() => bookClickHandler(genre)}
            key={genre}
            style={{
              cursor: "pointer",
              background: "rgb(229, 231, 235)",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        );
      })}

      <hr />

      <ul style={{ paddingInlineStart: "0px", textAlign: "left" }}>
        {movies[genre].map((film) => {
          return (
            <li
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                margin: "1rem 0rem",
                fontSize: "larger"
              }}
              key={film.name}
            >
              <div>{film.name}</div>
              <div style={{ fontSize: "0.8rem", padding: "0.1rem" }}>
                description: {film.description}
              </div>
              <div style={{ fontSize: "1rem", padding: "0.1rem" }}>
                rating: {film.rating}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
