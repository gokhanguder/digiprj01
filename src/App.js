/**
 * Comp01 est un composant Return (JSX)
 * @returns un render
 */
import Tick from "./Tick";
import MonForm01 from "./MonForm01"
import MonForm02 from "./MonForm02"
import MonForm03 from "./MonForm03"
import MonCompt04 from "./MonCompt04"


function Comp01(props) {
  return(<h1>{props.message}</h1>)
}


/** setInterval(Tick,1000)
On neut pas quand on touche au render
 * */
function App() {
  let onCallBack = (e)=>{console.log("App")}
  return (
   <div>
    

<Comp01 message='Formulaire de saisir V1'/>
<MonCompt04/>


</div>
   
  );
}

export default App;

/**
 *  <Comp01 message='DIGI 01'/>
    <Comp01 message='DIGI 02'/>
    <Comp01 message=''/>
    <Tick 
    message=
    "Horloge DIGI 2024-M05" 
    cb={onCallBack}/>
    <MonForm01/>
    <br></br>
    <MonForm02/>
    <br></br>
    <MonForm03/>  
 */
