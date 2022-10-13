import styles from '../../styles/components/footer.module.scss'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <a href='https://www.linkedin.com/in/t-vos/' target={'_blank'}>Thomas Vos</a>
            <a target={'_blank'} href='https://github.com/T-Vos/poll-application'>Github project</a>
        </footer>
    )
}

export default Footer;