import { useState } from 'react';
import { Poll } from '../../helpers/pollType';
import styles from '../../styles/components/pollMaker.module.scss';

function PollMaker(props: { pollQuestions: Poll[]; onAddQuestion: any; onQuestionChange: any; onQuestionDelete: any }) {
  const [newPollQuestion, setnewPollQuestion] = useState('');

  const handleChange = (event) => {
    setnewPollQuestion(event.target.value);
  };

  function addQuestionToList(question: string) {
    if (question.trim() === '') return;

    props.onAddQuestion(question);
    return setnewPollQuestion('');
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      return addQuestionToList(event.target.value);
    }
  };
  return (
    <>
      <h1>Poll</h1>
      <div className={styles.pollQuestions}>
        <input
          onChange={handleChange}
          value={newPollQuestion}
          type="text"
          onKeyPress={(x) => handleKeyPress(x)}
          onBlur={(x) => addQuestionToList(x.target.value)}></input>
        <p>Enter answer by pressing enter or using tab</p>
        <hr />
        {props.pollQuestions.map((pollQuestion) => {
          return (
            <UpdatePossibleAnswer
              key={`polling-${pollQuestion.pollId}`}
              pollQuestion={pollQuestion}
              onQuestionChange={(x, y) => props.onQuestionChange(x, y)}
              onQuestionDelete={() => props.onQuestionDelete(pollQuestion.pollId)}
            />
          );
        })}
      </div>
    </>
  );
}

export default PollMaker;

function UpdatePossibleAnswer(props: { pollQuestion: Poll; onQuestionChange: any; onQuestionDelete: any }) {
  return (
    <div className={styles.updateQuestionWrapper}>
      <input onChange={(x) => props.onQuestionChange(x.target.value, props.pollQuestion.pollId)} type="text" value={props.pollQuestion.pollText} />
      <button onClick={() => props.onQuestionDelete()}>X</button>
    </div>
  );
}
