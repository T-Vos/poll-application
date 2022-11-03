import { Poll } from "../../helpers/pollType"
import styles from '../../styles/components/pollMaker.module.scss'

function Vote(props:{pollQuestions:Poll[], onVote:any}) {

    return (
        <>
        <h1>Vote</h1>
        <div className={styles.pollQuestions}>
                {props.pollQuestions.map(pollQuestion =>{
                    return(
                        <span key={`voting-${pollQuestion.pollId}`} > {pollQuestion.pollText} </span>
                    )
                })}
        </div>
        </>
    )
}

export default Vote