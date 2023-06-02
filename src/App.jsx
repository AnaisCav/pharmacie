import "./App.css";
import NavBar from "./components/NavBar";
import Medoc from "./components/Medocs";

const medoc = [
  {
    name: "Doliprane",
    image:
      "https://s3.euro-pharmas.com/3578-large_default/doliprane-1000mg-8-gelules-sanofi.jpg",
    descp: "Utile après une bonne journée de props",
    sideEffect: "😴 🤕",
    color: "red",
  },
  {
    name: "Spasfon",
    image:
      "https://www.pharmashopi.com/images/imagecache/560x560/jpg/spasfon-lyoc-160mg-1373461936-1.webp",
    descp: "Conseillé après le DOM",
    sideEffect: "🥶 🤮 🤕",
    color: "green",
  },
  {
    name: "Efferalgan",
    image:
      "https://www.pharma-medicaments.com/wp-content/uploads/2022/01/3529178-600x398.jpg",
    descp: "Très apprécié après une bonne séance de DOJO",
    sideEffect: "🥶 🤮 🤕 😴",
    color: "blue",
  },

  {
    name: "Sédorrhoïde",
    image:
      "https://www.pharma-medicaments.com/wp-content/uploads/2022/01/3762609.jpg",
    descp: "A vous de devinez...",
    sideEffect: "🤕 😴",
    color: "orange",
  },

  {
    name: "Fervex",
    image:
      "https://www.mon-pharmacien-conseil.com/14461-home_default/fervex-adulte-8-sachets.jpg",
    descp: "À prendre avant chaque Daily",
    sideEffect: "🥶 😴 🤕",
    color: "purple",
  },

  {
    name: "Aspirine",
    image:
      "https://pharmacie-citypharma.fr/200798-large_default/aspirine-vitaminee-c-upsa-20-comprimes-effervescents.jpg",
    descp: "Après une semaine React",
    sideEffect: "😴 🤕",
    color: "lightgreen",
  },
  {
    name: "Smecta",
    image:
      "https://cdn.pharmaciedesdrakkars.com/media/images/products/3400931923138-ld-0017-front-64073a34b727a.jpg",
    descp: "À prendre obligatoirement avant un Checkpoint",
    sideEffect: "🥶 🤮 🤕",
    color: "brown",
  },
  {
    name: "Ibuprofène",
    image:
      "https://www.pharmaciesaintmartin.fr/resize/600x600/media/finish/img/origin/59/3400934841682-ibuprofene-biogaran-200-mg-comprimes-pellicules-b-30.jpg",
    descp: "Idéal avant ou après chaque LiveCo",
    sideEffect: "🤕 😴",
    color: "grey",
  },
];

function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className="displayMedoc">
          {/* <Medoc
            name={medoc[0].name}
            image={medoc[0].image}
            descp={medoc[0].descp}
            color="red"
            sideEffect={medoc[0].sideEffect}
          />
          <Medoc
            name={medoc[1].name}
            image={medoc[1].image}
            descp={medoc[1].descp}
            color="green"
            sideEffect={medoc[1].sideEffect}
          />
          <Medoc
            name={medoc[2].name}
            image={medoc[2].image}
            descp={medoc[2].descp}
            color="blue"
            sideEffect={medoc[2].sideEffect}
          />
          <Medoc
            name={medoc[3].name}
            image={medoc[3].image}
            descp={medoc[3].descp}
            color="orange"
            sideEffect={medoc[3].sideEffect}
          />
          <Medoc
            name={medoc[4].name}
            image={medoc[4].image}
            descp={medoc[4].descp}
            color="purple"
            sideEffect={medoc[4].sideEffect}
          />
          <Medoc
            name={medoc[5].name}
            image={medoc[5].image}
            descp={medoc[5].descp}
            color="lightgreen"
            sideEffect={medoc[5].sideEffect}
          />
          <Medoc
            name={medoc[6].name}
            image={medoc[6].image}
            descp={medoc[6].descp}
            color="brown"
            sideEffect={medoc[6].sideEffect}
          />
          <Medoc
            name={medoc[7].name}
            image={medoc[7].image}
            descp={medoc[7].descp}
            color="grey"
            sideEffect={medoc[7].sideEffect}
          /> */}

          {medoc.map((medicament) => (
            <Medoc
              name={medicament.name}
              image={medicament.image}
              descp={medicament.descp}
              color={medicament.color}
              sideEffect={medicament.sideEffect}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
