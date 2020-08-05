import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/14988496?s=460&u=cc40c7c8b46c18ce4bac76aa9d90b6ac9a868cdf&v=4" alt="Douglas Lara"/>
      <div> 
        <strong>Douglas Lara</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      sdfsdfdsfsdfsdf.
      <br /><br />
      sdfsdfsdfsdfdsf
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 60,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>

  )
}

export default TeacherItem;