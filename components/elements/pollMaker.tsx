import { useState } from 'react';
import { Poll } from '../../helpers/pollType';
import styles from '../../styles/components/pollMaker.module.scss';

function PollMaker(props: { pollQuestions: Poll[]; onAddQuestion: any; onQuestionChange: any }) {
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
            <input
              onChange={(x) => props.onQuestionChange(x.target.value, pollQuestion.pollId)}
              key={`polling-${pollQuestion.pollId}`}
              type="text"
              value={pollQuestion.pollText}
            />
          );
        })}
      </div>
    </>
  );
}

export default PollMaker;
