import type { NextPage } from 'next'
import PollMaker from '../components/elements/pollMaker'
import Vote from '../components/elements/vote'
import VoteDisplay from '../components/elements/voteDisplay'
import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridSection}><PollMaker/></div>
      <div className={styles.gridSection}><Vote/></div>
      <div className={styles.gridSection}><VoteDisplay/></div>
    </div>
  )
}

export default Home
