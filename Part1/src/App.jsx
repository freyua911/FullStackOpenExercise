// 1.1 version

// const Content = (props) => {
//   return (
//     <div>
//       <p>{props.part1} {props.exercises1} </p>
//       <p>{props.part2} {props.exercises2} </p>
//       <p>{props.part3} {props.exercises3} </p>
//     </div>
//   )
// }




// 1.2 version

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 =10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course ={course} />
//       <Content part1 ={part1} exercises1 = {exercises1} 
//       part2 ={part2} exercises2 = {exercises2} part3 ={part3} exercises3 = {exercises3}/>
//       <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
//     </div>
//   )
// }

// const Header = (props) => {
//   return (
//     <div>
//       <h1> {props.course}</h1>
//     </div>
//   )
// }


// const Content = (props) => {
//   return (
//     <div>
//       <Part part = {props.part1} exercises = {props.exercises1}/>
//       <Part part = {props.part2} exercises = {props.exercises2}/>
//       <Part part = {props.part3} exercises = {props.exercises3}/>

//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>{props.part} {props.exercises} </p>
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p> 
//     </div>
//   )
// }
// export default App






// 1.3, 1,4 same part except the app definition

// const App = () => {
//   const course = 'Half Stack application development';
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   };
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   };
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   };

//   const parts = [part1, part2, part3];

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   );
// };

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   );
// };

// const Content = (props) => {
//   return (
//     <div>
//       {props.parts.map((part, index) => (
//         <p key={index}>
//           {part.name} {part.exercises} 
//         </p>
//       ))}
//     </div>
//   );
// };

// const Total = (props) => {
//   const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);

//   return (
//     <div>
//       <p>Number of exercises {totalExercises}</p>
//     </div>
//   );
// };

// export default App;








//1.5 app part(other parts are same to previous)

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts}/>
//       <Total parts={course.parts} />
//     </div>
//   );
// };







//unicafe 1.6.7.8.9.10.11

// import { useState } from 'react';

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const [feedbackGiven, setFeedbackGiven] = useState(false);

//   const handleGoodClick = () => {
//     setGood(good + 1);
//     setFeedbackGiven(true);
//   };

//   const handleNeutralClick = () => {
//     setNeutral(neutral + 1);
//     setFeedbackGiven(true);
//   };

//   const handleBadClick = () => {
//     setBad(bad + 1);
//     setFeedbackGiven(true);
//   };

//   return (
//     <div>
//       <h1>Give feedback</h1>
//       <Button onClick={handleGoodClick} text="Good" />
//       <Button onClick={handleNeutralClick} text="Neutral" />
//       <Button onClick={handleBadClick} text="Bad" />

//       <Statistics good={good} neutral={neutral} bad={bad} feedbackGiven={feedbackGiven} />
//     </div>
//   );
// };

// const Statistics = ({ good, neutral, bad, feedbackGiven }) => {
//   const all = good + neutral + bad;
//   const average = all === 0 ? 0 : (good - bad) / all;
//   const goodPercentage = all === 0 ? 0 : (good / all) * 100;

//   if (!feedbackGiven) {
//     return <p>No feedback given</p>;
//   }

//   return (
//   <table>
//   <thead>
//     <tr>
//       <th>Statistics</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th><StatisticLine text="Good" value={good} /></th>
//     </tr>
//     <tr>
//       <td><StatisticLine text="Neutral" value={neutral} /></td>
//     </tr>
//     <tr>
//       <td><StatisticLine text="Bad" value={bad} /></td>
//     </tr>
//     <tr>
//       <td><StatisticLine text="All" value={all} /></td>
//     </tr>
//     <tr>
//       <td><StatisticLine text="Average" value={average} /></td>
//     </tr>
//     <tr>
//       <td><StatisticLine text="Positive" value={goodPercentage} /></td>
//     </tr>
//   </tbody>
// </table>    

//   );
// };

// const StatisticLine = ({text, value}) => {

//   return (
//     <div>
//      <p> {text} {value}</p>
//     </div>
//  )
//  };
  
// const Button = ({ onClick, text }) => {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   );
// };

// export default App;








// 1.12 anecdotes

// import { useState } from 'react'

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//     'The only way to go fast, is to go well.'
//   ]
   
//   const [selected, setSelected] = useState(0)

//   const handleNextClick = () =>{
//     setSelected(Math.floor(Math.random() * anecdotes.length))
//   }

//   return (
//     <div>
//       <p>{anecdotes[selected]}</p>
//       <button onClick={handleNextClick}>Next Anecdote</button>
//     </div>
//   )
// }

// export default App





//1.13-1.14 anecdotes

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [most, setMost] = useState(0)

  const handleNextClick = () =>{
    const newSelected = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelected);

  }

  const handleVote = () => {
    const newVotes = [...votes]; // Create a copy of the votes array
    newVotes[selected]++; // Increment the vote for the selected anecdote
    setVotes(newVotes);

  }

  const maxVotesIndex = votes.slice().sort((a, b) => b - a).indexOf(votes[selected]);


  return (
    <div>
      <h1>anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes </p>
      <button onClick={handleNextClick}>Next Anecdote</button>
      <button onClick={handleVote}>Vote</button>
<br></br>
    <h1>anecdote with most votes</h1>
    <p>{anecdotes[maxVotesIndex]}</p>
    </div>
  )
}

export default App