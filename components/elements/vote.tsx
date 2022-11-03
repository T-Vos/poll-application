import { contrastingColor, stringToColour } from '../../helpers/generateColour';
import { Poll } from '../../helpers/pollType';
import styles from '../../styles/components/pollMaker.module.scss';

function Vote(props: { pollQuestions: Poll[]; onVote: any }) {
  return (
    <>
      <h1>Vote</h1>
      <div className={styles.pollQuestions}>
        {props.pollQuestions.map((pollQuestion) => {
          const backgroundColor = stringToColour(pollQuestion.pollText);
          const contrastColor = contrastingColor(backgroundColor.replace('#', ''));
          return (
            <button
              className={styles.button}
              style={{ backgroundColor: backgroundColor, color: contrastColor }}
              onClick={() => props.onVote(pollQuestion.pollId)}
              key={`voting-${pollQuestion.pollId}`}>
              {pollQuestion.pollText}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Vote;
