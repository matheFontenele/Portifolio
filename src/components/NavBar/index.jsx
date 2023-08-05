import styles from 'components/Header/Header.module.scss'
import MenuLink from 'components/MenuLink'

export default function NavBar(){
    return(
        <nav className={styles.header__navbar}>

            <MenuLink title='Home' path='/' to='/'/>
            <MenuLink title='Sobre Mim' path='/sobremim' to='/sobremim'/>
            <MenuLink title='Projetos' path='/projetos' to='/projetos'/>
            <MenuLink title='Contato' path='/contato' to='/contato'/>
        </nav>
    )
}