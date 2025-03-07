// //following data from sandbox example
// // The provided course information.

// // This is the info about my course
// const CourseInfo = {
//   id: 451, // This number is the ID of my course
//   name: "Introduction to JavaScript", // The name of my course is "Introduction to JavaScript"
// };

// // This is info about the assignment group
// const AssignmentGroup = {
//   id: 12345, // This number is the ID of my assignment group
//   name: "Fundamentals of JavaScript", // The name of my assignment group
//   course_id: 451, // This tells me that my assignments belong to the "Introduction to JavaScript" course
//   group_weight: 25, // The assignments in this group are worth 25% of my grade
//   assignments: [
//     // These are the assignments in this group
//     {
//       id: 1, // This is the ID for the first assignment
//       name: "Declare a Variable", // The first assignment is called "Declare a Variable"
//       due_at: "2023-01-25", // This assignment was due on January 25, 2023
//       points_possible: 50, // I could earn 50 points for this assignment
//     },
//     {
//       id: 2,
//       name: "Write a Function", // The second assignment is "Write a Function"
//       due_at: "2023-02-27", // It was due on February 27, 2023
//       points_possible: 150, // This assignment is worth 150 points
//     },
//     {
//       id: 3,
//       name: "Code the World", // The third assignment is called "Code the World"
//       due_at: "3156-11-15", // The due date is super far in the future (so we don’t worry about it yet)
//       points_possible: 500, // This one is worth 500 points
//     },
//   ],
// };

// // Here is the data for the students' submissions
// const LearnerSubmissions = [
//   {
//     learner_id: 125, // This is the ID for the first learner
//     assignment_id: 1, // They did the first assignment
//     submission: {
//       submitted_at: "2023-01-25", // They submitted it on the due date
//       score: 47, // They got 47 out of 50 points
//     },
//   },
//   {
//     learner_id: 125,
//     assignment_id: 2,
//     submission: {
//       submitted_at: "2023-02-12", // They submitted it a little late
//       score: 150, // They got all 150 points
//     },
//   },
//   {
//     learner_id: 125,
//     assignment_id: 3,
//     submission: {
//       submitted_at: "2023-01-25", // They submitted it on time
//       score: 400, // They got 400 out of 500 points
//     },
//   },
//   {
//     learner_id: 132,
//     assignment_id: 1,
//     submission: {
//       submitted_at: "2023-01-24", // This learner submitted it a day early
//       score: 39, // They got 39 out of 50 points
//     },
//   },
//   {
//     learner_id: 132,
//     assignment_id: 2,
//     submission: {
//       submitted_at: "2023-03-07", // This learner submitted it late
//       score: 140, // They got 140 points out of 150, but lost 10% because it was late
//     },
//   },
// ];

// // function

// //output should be like following:
// /*
// function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
//   */

// //following is my function
// //to get learner data

// function getLearnerData(course, ag, submissions) {
//   /*If an AssignmentGroup does not belong to its course (mismatching course_id),
//    your program should throw an error, 
//    letting the user know that the input was invalid.
//     Similar data validation should occur elsewhere within the program.
//   */
//   if (course.id !== ag.course_id) {
//     console.log(
//       "assignment group  " +
//         ag.name +
//         "  does not match course " +
//         course.name +
//         "."
//     );
//     return [];
//   }

//   // Filter assignments to only include those that are due
//   /*You should also account for potential errors in the data that your program receives.
//  What if points_possible is 0?
//   You cannot divide by zero. 
//   What if a value that you are expecting to be a number is instead a string? 
// */
//   const validAssignment = [];
//   for (let i = 0; i < ag.assignments.length; i++) {
//     if (new Date(ag.assignments[i].due_at) <= new Date()) {
//       validAssignment.push(ag.assigment[i]);
//     }
//   }

//   //i creat an empty list wherer i will put all the learer's scores
//   const result = [];

//   //i need to find all the learners who have submitted something
//   // Create an array of unique learner IDs
//   const learners = [];
//   for (let i = 0; i < submissions.length; i++) {
//     const learnerId = submissions[i].learner_id;
//     if (learners.indexOf(learnerId) === -1) {
//       learners.push(learnerId);
//     }
//   }
//   //for each learner i will calculate their scores

//   LearnerSubmissions.forEach((learner_id) => {
//     let learnerTotalScore = 0; //this will be totl score
//     let learnerTotalPossible = 0; //how many points they could gotten in total
//     let learnerResult = { id: learner_id }; //i start with their id
//   });

//   /*
// contenue here do following:
//     for each valid assignment, I will calculate how well they did
// If this learner did the assignment
// */
// validAssignment.forEach(assigments=>{
//     const submission=submissions.find(sub=>sub.learner_id===learner_id && sub.assignment_id===assignment.id);
//     if (submission){
//         let score=submission.submission.score;
//         let possible=assigments.points_possible;

//         if (isNaN(score)||isNaN(possible)){
//             console.error('there is somthing wrong wih the date of learning.');
//             return;
//         }
//         if (possible===0){ 
//             console.error('the assignment has 0 points possible ');
//             return;

//         }

//         //iflearner was late, i take 10% off thier score
//         const dueDate=new Date(assignment.due_at);
//         const submittedAt=new Date(submisssion.submission.submitted_at);
//         if(submittedAt>dueDate){
//             score=score-(0.1*possible);//deduct 10% for being late

//         }
// //I now calcualte there score as a precentage like how many points out of possible
// const normalScore=score/possible;
// learnerResult[assignment.id]=normalScore;

// // i add thier score and total points to the total
// learnerTotalScore+=score;
// learnerTotalPossible+=possible
//     }

// });

// //average score
// if(learnerTotalPossible>0){learnerResult.avg=learnerTotalScore/learnerTotalPossible;

// }else{
//     learnerResult.avg=0;// incase they didnt do any assignment
    
// }
// result.push(learnerResult);

// };

// //return result;//return the list of results

// // } catch (error) {
// //     console.error("Oh no, there was an error:", error.message); // If there was an error, I print it
// //     return []; // If something went wrong, I return an empty list
// //   }




// /*

// If the score or possible points are not numbers, I print an error

// If the assignment is worth 0 points, I don't want to divide by 0
            

// If the learner was late, I take 10% off their score

// calculate their score as a percentage (how many points out of the total possible)

// add their score and total points to the totals


// I calculate their average score if they did any assignments

// add this learner's result to the list of results


// dont forget try and catch
// */


// //output here’s how I run the function to get the results
// /*Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
// {
//     // the ID of the learner for which this data has been collected
//     "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }
//     */

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
// console.log(result); // This will print the learners' scores


//different data than sandbox
const CourseInfo = {
    id: 572, // This is the ID for my new course
    name: "Advanced Python Programming", // The name of my course is "Advanced Python Programming"
  };
  
  // Assignment group info
  const AssignmentGroup = {
    id: 98765, // This is the ID for my new assignment group
    name: "Object-Oriented Programming", // The name of my assignment group is "Object-Oriented Programming"
    course_id: 572, // This tells me that my assignments belong to the "Advanced Python Programming" course
    group_weight: 30, // The assignments in this group are worth 30% of my grade
    assignments: [
      {
        id: 1,
        name: "Classes and Inheritance",
        due_at: "2024-04-15",
        points_possible: 75,
      },
      {
        id: 2,
        name: "Polymorphism and Abstraction",
        due_at: "2024-05-10",
        points_possible: 200,
      },
      {
        id: 3,
        name: "Building a Python Game",
        due_at: "2025-03-01",
        points_possible: 600,
      },
      {
        id: 4,
        name: "Debugging and Unit Testing",
        due_at: "2024-12-20",
        points_possible: 150,
      },
    ],
  };
  
  // Learner submissions data
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2024-04-14", // Submitted early
        score: 70,
      },
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2024-05-09", // Submitted on time
        score: 180,
      },
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2024-04-14", // Submitted early
        score: 60,
      },
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2024-05-15", // Late submission
        score: 160,
      },
    },
  ];
  
  // clean code
  function getLearnerData(course, ag, submissions) {
    try {
      // Validate the course and assignment group
      if (course.id !== ag.course_id) {
        console.log("Assignment group " + ag.name + " does not match course " + course.name + ".");
        return [];
      }
  
      // Filter assignments to include those that are due
      const validAssignments = [];
      for (let i = 0; i < ag.assignments.length; i++) {
        if (new Date(ag.assignments[i].due_at) <= new Date()) {
          validAssignments.push(ag.assignments[i]);
        }
      }
  
      const result = [];
  
      // Find unique learners
      const learners = [];
      for (let i = 0; i < submissions.length; i++) {
        const learnerId = submissions[i].learner_id;
        if (learners.indexOf(learnerId) === -1) {
          learners.push(learnerId);
        }
      }
  
      // Calculate results for each learner
      for (let i = 0; i < learners.length; i++) {
        const learner_id = learners[i];
        let learnerTotalScore = 0; // This will be the total score
        let learnerTotalPossible = 0; // How many points they could have gotten in total
        let learnerResult = { id: learner_id };
  
        // Process each valid assignment
        for (let j = 0; j < validAssignments.length; j++) {
          const assignment = validAssignments[j];
          const submission = submissions.find(sub => sub.learner_id === learner_id && sub.assignment_id === assignment.id);
  
          if (submission) {
            let score = submission.submission.score;
            let possible = assignment.points_possible;
  
            // Check for invalid data
            if (isNaN(score) || isNaN(possible)) {
              console.error("Invalid data for learner " + learner_id);
              continue; // Skip this iteration
            }
  
            if (possible === 0) {
              console.error("Assignment has 0 points possible");
              continue; // Skip this iteration
            }
  
            // Deduct 10% for late submissions
            const dueDate = new Date(assignment.due_at);
            const submittedAt = new Date(submission.submission.submitted_at);
            if (submittedAt > dueDate) {
              score -= 0.1 * possible; // Deduct 10% for being late
            }
  
                // Calculate their score as a percentage
            const normalScore = score /possible;
            learnerResult[assignment.id]= normalScore;
  
            // Add to total score and total possible points
            learnerTotalScore +=score;
            learnerTotalPossible += possible;
            console.log("learner total possible "+learnerTotalPossible);
          }
        }
  
        // Calculate average score
        if (learnerTotalPossible > 0)
             {
          learnerResult.avg = learnerTotalScore / learnerTotalPossible;
          console.log("learner ave "+learnerResult.avg);
        } else {
          learnerResult.avg = 0; // In case they didn't do any assignments
        }
  
        result.push(learnerResult);
      }
  
      return result; // Return the list of results
    } catch (error) {
      console.error("Error happened in processing learner data: ", error.message);
      return [];
    }
  }
  
  // Output
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result);
  