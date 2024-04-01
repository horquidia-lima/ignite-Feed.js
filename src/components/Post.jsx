import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/horquidia-lima.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Horquidia Lima</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='01 de Abril' dateTime='2024-04-01 08:13:30'>Públicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="#">jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>  
            </div>
        </article>
    )
}