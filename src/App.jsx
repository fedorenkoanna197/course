import "./App.css";
import Cards from "./components/Cards/Cards";
import { useCourse } from "./CustomHooks/useCourse";

function App() {
  const [lessons, title] = useCourse();
  lessons.map((e)=>{console.log(e.youtube)})
  return (
    <main className="App">
      <h2>{title}</h2>
      <article>
        {lessons.map((element, i) => {
              return <Cards element={element} key={i} index={i}/>
            })
          }
      </article>
    </main>
  );
}

export default App;
