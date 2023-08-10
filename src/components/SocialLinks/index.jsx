import sociais from 'assets/Json/social.json'

export default function SocialLink({classeUl, classeLi, classeIcon, classeName}){
    return(
            <ul className={classeUl}>
               {sociais.map((social) => (
                
                <li className={classeLi} key={social.id}>
                    
                    <a href={social.link}>
                        <img 
                            className={classeIcon} 
                            src={social.img} 
                            alt={social.name}
                        />
                        <p className={classeName}>{social.name}</p>
                    </a>
                
                </li>
               ))}
            </ul>
    )
}