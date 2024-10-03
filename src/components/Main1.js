import '../App.css';
import '../css/header.css';
//import App1 from './App1'
import deleteCookie from '../Cookie/Delete_Cookie';

function deleteToken() {
  deleteCookie('token')
}

export default function Main1() {
    return (
      <div className="Main">
        <div id="AboutUs" >
          BIBA
          <button onClick={deleteToken}>Выход</button>
        </div>
  
      </div>
    )
  }