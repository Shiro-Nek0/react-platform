import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu85hoi7f7jFtyr1AWSMEQ-VH3je_F_CEO6KtCgK=s83-c-mo" alt="Taylor Hoffmann"/>
                        <div>
                            <strong>Taylor Hoffmann</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de Química Avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma de minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;