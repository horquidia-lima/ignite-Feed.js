import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/horquidia-lima.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAnndTime}>
                            <strong>Horquidia Lima</strong>
                            <time title='01 de Abril' dateTime='2024-04-01 08:13:30'>Cerca de 1h</time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </footer>
            </div>
        </div>
    )
}