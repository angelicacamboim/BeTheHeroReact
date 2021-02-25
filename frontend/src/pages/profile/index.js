import React from 'react'
import './styles.css'
import logoImg from '../../assets/Logo.svg'
import{ Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'



function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src= {logoImg} alt="Logo"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            

        </div>
       
        );
  }
  
  export default Profile;
  