import React , { useState } from "react";
import './style.css'
import LogoImg from "../../assets/logo.svg"
import {Link , useHistory} from "react-router-dom";
import {FiArrowLeft} from "react-icons/all";
import api from "../../services/api"
export default function Register () {

    const [name, setName] = useState('')
    const [email, setEmaiil] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
const hitory = useHistory()

    async function handleRegister(e) {
        e.preventDefault()


        const data ={
            name, email, whatsapp, city, uf
        }

        try {


            const response = await api.post('ongs', data)
            alert(`Seu id: ${response.data.id}`)
            console.log(response)
            hitory.push("/")
        }catch (err) {
            alert(`Erro cadastro`)
            console.log(err)

        }

    }

    return (
        <div className="redister-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Heroes"/>
                    <h1>Cadastro</h1>
                    <p>Faça sue cadastro , entre na plataforma e ajude a encontrar os casos de sua ONG.</p>

                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color='#e02041'/>
                        Não tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmaiil(e.target.value)}
                    />

                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">

                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input
                            placeholder="UF" style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />

                    </div>
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

