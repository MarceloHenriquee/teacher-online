import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

 function TeacherItem(){
     return (
        <article className="teacher-item">
        <header>
            <img src="https://netsystemsweb.com.br/painel/caricatura.jpg" alt="Marcelo"/>
            <div>
                <strong>Marcelo Henrique</strong>
                <span>Logica de programação</span>
            </div>
        </header>
        <p>Entusiasta das melhores tecnologias de programação.
            <br />
            Muita experiência na area de desenvolvimento.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
     </article>
     )
 }

 export default TeacherItem;