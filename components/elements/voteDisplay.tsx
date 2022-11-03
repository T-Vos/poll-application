import { BarChart, Bar, Cell, XAxis, YAxis } from 'recharts';
import { stringToColour } from '../../helpers/generateColour';
import { Poll } from '../../helpers/pollType';

function VoteGraph(props: { pollQuestions: Poll[] }) {
  return (
    <>
      <h1>Charts</h1>
      {props.pollQuestions.length > 0 && (
        <>
          <BarChart
            width={500}
            height={300}
            data={props.pollQuestions}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}>
            <XAxis dataKey="pollText" />
            <YAxis />
            <Bar dataKey="pollVotes" label={{ position: 'top' }}>
              {props.pollQuestions.map((entry) => (
                <Cell key={`cell-${entry.pollId}`} fill={stringToColour(entry.pollText)} />
              ))}
            </Bar>
          </BarChart>
        </>
      )}
    </>
  );
}

export default VoteGraph;
