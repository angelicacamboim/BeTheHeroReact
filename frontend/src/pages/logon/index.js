import React, {useState} from 'react'
import './styles.css'
import PessoasImg from '../../assets/Pessoas.png'
import logoImg from '../../assets/Logo.svg'
import {FiLogIn} from 'react-icons/fi'
import{ Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

function Logon() {
    const [id, setId] = useState('')
    const history = useHistory('')

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('session', {id})

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.ongName.name)

            history.push('/profile')

        } catch (err){
            alert('Falha no login, tente novamente!')

        }

    }

    return (
        <div className="logon-container">
            <section className="form">
            <img src= {logoImg} alt="Logo"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>

                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/cadastrar">
                    <FiLogIn size={16} color="#E0204"/>
                    Não tenho cadastro
                </Link>

            </form>

            </section>

            <img src= {PessoasImg} alt="Heroes"/>

        </div>
        );
  }
  
  export default Logon;
  