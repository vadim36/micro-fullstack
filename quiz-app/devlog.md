# Quiz App 
## User's needs
1) User can create a survey with different questions with different kind of questions and without right/wrong answers;
2) User can create a test with the same types of questions and with right/wrong answers
3) User can see the results of those who've passed surveys or test in the test's dashboard;
4) Passing can see their results after tests or in the dashboard or get them by email;
5) User can choose the type of seeing questions: focused(one question in page) or classic(all the questions in page);
6) User can generate a quiz by AI or document;

## Features Order
1) Core
- Build a question(it has title, description, image, count of scores and answers)
- Question can have various types of answers
- Answers can be true/false, multiple answers and single answers, short text/long text
2) Shell
- An array of questions can be either survey or test(in survey you have only rights answers and in test no)
3) Sharing Quizes
- You can open the quiz for
  - everybody
  - auth users
  - certain auth users
  - everybody who know the password
  - auth who know the password
  - certain auth who know the password
4) Results
- Three lists of passed, started, willing;
- In the passed quizes you can see your result, in started - your progress;
- There is another tab with created quizes and results of users;
- There is one more page for each user with results of quiz;
- After checking the results, users can get a notification by email;
- Users also can see the pre-result by finishing the test;
5) Additional settings
- The question can be required or not;
- Answers and Questions can be shuffled;
- User can choose the type of passign questions - classic or focused;
- In focused type of passing you can see the progressbar;
- Quiz can have a header;
- You can see the count of participants;
- Quiz and question can have deadline and startline;
- In focused passing mode you may not be able to return to previous questions;
- During the passing quiz your keyboard or camera can be switched on;
- You can see or not the pre-result after the quiz;
6) UI Settings
- You can setting the UI of header or questions' area
- In header you can set up your font size, bg(or image bg), logo
- In questions you can define font size of text, font size of questions, bg and questions' text settings