import React from "react";
import './style.css'
import LogoImg from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import {FiArrowLeft} from "react-icons/all";
export default function NewIncident () {

    return(
        <div className="new-incident-conteiner">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Heroes"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para reolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color='#e02041' />
                       voltar para home
                    </Link>

                </section>
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea  placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>


                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )

}