import styles from './Navbar.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { GrClose } from 'react-icons/gr';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar(){
    const [open, setOpen] = useState(false);

    return(
        <nav className={styles.navbar} 
            onClick={() => setOpen(!open)}>
            
            {open ? <GrClose size={25} color='#008000'/> : <FaBars size={25} color='#008000' />}
            <div className={classNames({
                [styles.navbar__pages]:true,
                [styles.navbar__pages__ativo]: open
            })}>
                <Link className={styles.navbar__page} path='/' to='/'>Home</Link>
                <Link className={styles.navbar__page} path='/sobremim' to='/sobremim'>Sobre Mim</Link>
                <Link className={styles.navbar__page} path='/projetos' to='/projetos'>Projetos</Link>
                <Link className={styles.navbar__page} path='/contato' to='/contato'>Contato</Link>
            </div>
        </nav>
    )
}