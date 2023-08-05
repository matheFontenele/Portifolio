import { IMaskInput } from 'react-imask';
export default function FormInputs({label, tipo, placeholder, forDe, nome, id, classe, valor, changeValue, mascara}){


    const aoDigitado = (e) => {
        changeValue(e.target.value)
    }


    return(
        <div className={classe}>
            
            <label 
            htmlFor={forDe}>
                {label}
            </label>
            
            <IMaskInput 
                mask={mascara} 
                value={valor} 
                onChange={aoDigitado} 
                id={id} 
                name={nome} 
                type={tipo} 
                placeholder={placeholder}
                />
        </div>
    )
}