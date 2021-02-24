import React from 'react'
import './styles.css'
import PessoasImg from '../../assets/Pessoas.png'
import logoImg from '../../assets/Logo.svg'
import {FiLogIn} from 'react-icons/fi'

function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
            <img src= {logoImg} alt="Logo"/>

            <form>
                <h1>Faça seu logon</h1>

                <input placeholder="Sua ID"/>

                <button className="button" type="submit">Entrar</button>

                <a href="/register">
                    <FiLogIn size={16} color="#E0204"/>
                    Não tenho cadastro
                </a>

            </form>

            </section>

            <img src= {PessoasImg} alt="Heroes"/>

        </div>
        );
  }
  
  export default Logon;
  