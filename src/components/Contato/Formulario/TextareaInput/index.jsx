export default function Textarea({placeholder, classe, changeValue, valor}){

    const valueDigit = (e) =>{
        changeValue(e.target.value)
    }

    return(
        <textarea 
            value={valor} 
            className={classe} 
            onChange={valueDigit} 
            placeholder={placeholder}>

        </textarea>
    )
}