import { useState } from "react";
const Submit2 = () => {
 const [state, setState] = useState({
 currentPage: 1,
buttonClicked: ""
 });
 const incrementPage = () => {
// On assigne un nouvel objet à notre état
setState({ 
...state,
 currentPage: state.currentPage + 1, 
});
 }
 return (
<button
onClick={incrementPage}>
{state.currentPage}
</button>
 )
}
 export default Submit2