//following data from sandbox example
// The provided course information.

// This is the info about my course
const CourseInfo = {
  id: 451, // This number is the ID of my course
  name: "Introduction to JavaScript", // The name of my course is "Introduction to JavaScript"
};

// This is info about the assignment group
const AssignmentGroup = {
  id: 12345, // This number is the ID of my assignment group
  name: "Fundamentals of JavaScript", // The name of my assignment group
  course_id: 451, // This tells me that my assignments belong to the "Introduction to JavaScript" course
  group_weight: 25, // The assignments in this group are worth 25% of my grade
  assignments: [
    // These are the assignments in this group
    {
      id: 1, // This is the ID for the first assignment
      name: "Declare a Variable", // The first assignment is called "Declare a Variable"
      due_at: "2023-01-25", // This assignment was due on January 25, 2023
      points_possible: 50, // I could earn 50 points for this assignment
    },
    {
      id: 2,
      name: "Write a Function", // The second assignment is "Write a Function"
      due_at: "2023-02-27", // It was due on February 27, 2023
      points_possible: 150, // This assignment is worth 150 points
    },
    {
      id: 3,
      name: "Code the World", // The third assignment is called "Code the World"
      due_at: "3156-11-15", // The due date is super far in the future (so we don’t worry about it yet)
      points_possible: 500, // This one is worth 500 points
    },
  ],
};

// Here is the data for the students' submissions
const LearnerSubmissions = [
  {
    learner_id: 125, // This is the ID for the first learner
    assignment_id: 1, // They did the first assignment
    submission: {
      submitted_at: "2023-01-25", // They submitted it on the due date
      score: 47, // They got 47 out of 50 points
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12", // They submitted it a little late
      score: 150, // They got all 150 points
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25", // They submitted it on time
      score: 400, // They got 400 out of 500 points
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24", // This learner submitted it a day early
      score: 39, // They got 39 out of 50 points
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07", // This learner submitted it late
      score: 140, // They got 140 points out of 150, but lost 10% because it was late
    },
  },
];

// function

//output should be like following:
/*
function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  */

//following is my function
//to get learner data

function getLearnerData(course, ag, submissions) {
  /*If an AssignmentGroup does not belong to its course (mismatching course_id),
   your program should throw an error, 
   letting the user know that the input was invalid.
    Similar data validation should occur elsewhere within the program.
  */
  if (course.id !== ag.course_id) {
    console.log(
      "assignment group  " +
        ag.name +
        "  does not match course " +
        course.name +
        "."
    );
    return [];
  }

  // Filter assignments to only include those that are due
  /*You should also account for potential errors in the data that your program receives.
 What if points_possible is 0?
  You cannot divide by zero. 
  What if a value that you are expecting to be a number is instead a string? 
*/
  const validAssignment = [];
  for (let i = 0; i < ag.assignments.length; i++) {
    if (new Date(ag.assignments[i].due_at) <= new Date()) {
      validAssignment.push(ag.assigments[i]);
    }
  }

  //i creat an empty list wherer i will put all the learer's scores
  const result = [];

  //i need to find all the learners who have submitted something
  // Create an array of unique learner IDs
  const learners = [];
  for (let i = 0; i < submissions.length; i++) {
    const learnerId = submissions[i].learner_id;
    if (learners.indexOf(learnerId) === -1) {
      learners.push(learnerId);
    }
  }
  //for each learner i will calculate their scores

  LearnerSubmissions.forEach((learner_id) => {
    let learnerTotalScore = 0; //this will be totl score
    let learnerTotalPossible = 0; //how many points they could gotten in total
    letlearnerResult - { id: learner_id }; //i start with their id
  });

  /*
contenue here do following:
    for each valid assignment, I will calculate how well they did
If this learner did the assignment

If the score or possible points are not numbers, I print an error

If the assignment is worth 0 points, I don't want to divide by 0
            

If the learner was late, I take 10% off their score

calculate their score as a percentage (how many points out of the total possible)

add their score and total points to the totals


I calculate their average score if they did any assignments

add this learner's result to the list of results


dont forget try and catch
*/
}

//output here’s how I run the function to get the results
/*Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}
    */

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result); // This will print the learners' scores
