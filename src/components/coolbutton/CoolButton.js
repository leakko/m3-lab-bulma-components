import 'bulma/css/bulma.css';
import "./CoolButton.css"

export default function CoolButton(){
    return(
   <div className="CoolButton">
<button class="button is-rounded my-class is-danger is-small">Button 1</button>
<button class="button is-small is-success">Button 2</button>
        </div>
   )
}