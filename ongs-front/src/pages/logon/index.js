import React, {useState} from "react";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import {Link , useHistory} from "react-router-dom"
import "./styles.css"
import api from "../../services/api"


import {FiLogIn} from 'react-icons/fi'

export default function Logon() {
const [id , setId] = useState("")
const history = useHistory()
    async function randleLogin (e) {
e.preventDefault()


  try {


            const response = await api.post('sessions', {id})
localStorage.setItem('ongID' , id)
      localStorage.setItem('ongName' , id)
            console.log(response.data.id)
      history.push('/profile')
        }catch (err) {
            console.log('falha ')
        }


    }
    
return(
    <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Be the Hero"/>
            <form onSubmit={randleLogin} action="">
                <h1>Fça seu logon</h1>
                <input
                    placeholder="Sua ID"
                value={id}
                    onChange={e => setId(e.target.value)}
                />
                <button className="button" type='submit'>Entrar</button>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color='#e02041' />
                    Não tenho cadastro
                </Link>
            </form>
        </section>
        <img src={heroesImg} alt="Heroes"/>
    </div>)
}

