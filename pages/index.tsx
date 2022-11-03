import type { NextPage } from 'next';
import { useState } from 'react';
import PollMaker from '../components/elements/pollMaker';
import Vote from '../components/elements/vote';
import VoteDisplay from '../components/elements/voteDisplay';
import { Poll } from '../helpers/pollType';
import styles from '../styles/pages/home.module.scss';

const Home: NextPage = () => {
  const [pollQuestions, setPollQuestions] = useState<Poll[]>([]);

  function addQuestionToPoll(question: string) {
    if (pollQuestions.length === 10) return;
    if (pollQuestions.some((e) => e.pollText === question)) return;
    const newQuestion: Poll = {
      pollId: hashCode(question),
      pollText: question,
      pollVotes: 0
    };
    return setPollQuestions([...pollQuestions, newQuestion]);
  }

  function handleQuestionChange(newPollText: string, pollQuestionId: string) {
    const newPollQuestions = pollQuestions.map((x) => {
      if (x.pollId === pollQuestionId) {
        x.pollText = newPollText;
        x.pollVotes = 0;
      }
      return x;
    });
    return setPollQuestions([...newPollQuestions]);
  }

  function addVote(pollQuestionId: string) {
    const newPollQuestions = pollQuestions.map((x) => {
      if (x.pollId === pollQuestionId) {
        x.pollVotes++;
      }
      return x;
    });
    return setPollQuestions([...newPollQuestions]);
  }

  return (
    <div className={styles.fullScreen}>
      <div className={styles.grid}>
        <div className={styles.gridSection}>
          <PollMaker pollQuestions={pollQuestions} onQuestionChange={handleQuestionChange} onAddQuestion={(x: string) => addQuestionToPoll(x)} />
        </div>
        <div className={styles.gridSection}>
          <Vote pollQuestions={pollQuestions} onVote={(x) => addVote(x)} />
        </div>
        <div className={styles.gridSection}>
          <VoteDisplay pollQuestions={pollQuestions} />
        </div>
      </div>
    </div>
  );
};

export default Home;

function hashCode(str: string): string {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString();
}
