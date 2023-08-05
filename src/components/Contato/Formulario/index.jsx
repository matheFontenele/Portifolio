import { useState } from 'react'
import FormInputs from 'components/Contato/Formulario/FormInputs';
import stylus from './Formulario.module.scss'
import Textarea from 'components/Contato/Formulario/TextareaInput';

export default function Formulario(){

    const [nome, setNome] = useState('')
    const [contato, setContato] = useState('')
    const [email, setEmail] = useState('')
    const [texto, setTexto] = useState('')


    const sendForm = (e) => {
        e.preventDefault()
        console.log(nome, contato, email, texto)
    }


    return(
        <fieldset className={stylus.field}>
            <form className={stylus.form} onSubmit={sendForm}>
                <FormInputs
                    label='Nome: '
                    forDe='nome'
                    id='nome'
                    tipo='text'
                    placeholder='Seu nome'
                    classe={stylus.form__inputDiv}
                    valor={nome}
                    changeValue={valor => setNome(valor)}
                />

                <FormInputs
                    label='Contato: '
                    forDe='fone'
                    id='fone'
                    tipo='text'
                    placeholder='(00) 0 0000 0000'
                    mascara='(00) 00000 0000'
                    classe={stylus.form__inputDiv}
                    valor={contato}
                    changeValue={valor => setContato(valor)}
                />
                
                <FormInputs
                    label='E-mail: '
                    forDe='email'
                    id='email'
                    tipo='email'
                    placeholder='seuemail@email.com'
                    classe={stylus.form__inputDiv}
                    valor={email}
                    changeValue={valor => setEmail(valor)}
                />

                <Textarea
                    placeholder='Deixe sua mensagem'
                    classe={stylus.form__textarea}
                    valor={texto}
                    changeValue={valor => setTexto(valor)}/>


                <button type='submit' className={stylus.form__btn}>Enviar Mensagem</button>
                
            </form>
        </fieldset>
    )
}