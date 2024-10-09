import '../App.css';
//import '../css/header.css';
import '../index.css'
import { Link, Navigate} from "react-router-dom";
import deleteCookie from '../Cookie/Delete_Cookie';



function deleteToken() {
  deleteCookie('token')
  deleteCookie('token_registration')
  deleteCookie('user')
}

export default function Main1() {
    return (
      <div className="Main">
        <div id="AboutUs" >
        <h1 className="text-slate-500 bg-blue-100">
          Привет мир!
        </h1>
        {/* colums-i разбивает блок на i столбцов */}
          <div className="flex flex-row w-52 p-3 columns-7 text-center font-inter font-bold">
            <div className="flex-1 bg-blue-600 rounded-full font-inter">VORON</div>
            <div className="flex-1 w-24 px-0.5 ">SCRIPT</div>
            <div className="flex-1 basis-1/2 ml-60 font-inter hover:underline hover:text-blue-600" ><a href="/main"  title="Главная" >ГЛАВНАЯ</a></div> 
            <div className="flex-initial w-16 md:w-32 lg:w-48 ml-12 font-inter hover:underline hover:text-blue-600" ><a href="/projects"  title="Проекты">ПРОЕКТЫ</a></div> 
            <div className="flex-none w-52 ml-12 font-inter hover:underline hover:text-blue-600" ><a href="/main/settings"  title="Настойки генерации">НАСТРОЙКИ ГЕНЕРАЦИИ</a></div> 
            <div className="flex-none ml-60 text-white bg-blue-600 rounded-full font-inter hover:text-black" ><a href="/main/generate" title="Link" id="generate_add">СОЗДАТЬ РЕКЛАМУ</a></div> 

          </div>

          <Link to="/Enter"><button onClick={deleteToken}>Выход</button></Link>
        </div>
  
      </div>
    )
  }