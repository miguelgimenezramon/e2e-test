$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/leaderboard.feature");
formatter.feature({
  "line": 1,
  "name": "Users are listed from highest score to lowest, and when",
  "description": "they get points they can move up on the ranking.",
  "id": "users-are-listed-from-highest-score-to-lowest,-and-when",
  "keyword": "Feature"
});
formatter.before({
  "duration": 171405389,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "A user sends a higher number of right attempts and",
  "description": "it\u0027s positioned at the first place in the ranking.",
  "id": "users-are-listed-from-highest-score-to-lowest,-and-when;a-user-sends-a-higher-number-of-right-attempts-and",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "the user john_snow sends 2 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user peter sends 1 right attempts",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user john_snow is the number 1 on the leaderboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user peter is the number 2 on the leaderboard",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 39580503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "peter",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "right",
      "offset": 23
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 15450534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "LeaderboardFeatureSteps.the_user_is_the_number_on_the_leaderboard(String,int)"
});
formatter.result({
  "duration": 531877694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "peter",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "LeaderboardFeatureSteps.the_user_is_the_number_on_the_leaderboard(String,int)"
});
formatter.result({
  "duration": 525829086,
  "status": "passed"
});
formatter.before({
  "duration": 26859018,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "A user passes another one when gets higher score.",
  "description": "",
  "id": "users-are-listed-from-highest-score-to-lowest,-and-when;a-user-passes-another-one-when-gets-higher-score.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "the user john_snow sends 3 right attempts",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user peter sends 2 right attempts",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user john_snow is the number 1 on the leaderboard",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user peter sends 2 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user peter is the number 1 on the leaderboard",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the user john_snow is the number 2 on the leaderboard",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 71064636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "peter",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "right",
      "offset": 23
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 28349557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "LeaderboardFeatureSteps.the_user_is_the_number_on_the_leaderboard(String,int)"
});
formatter.result({
  "duration": 521946451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "peter",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "right",
      "offset": 23
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 22746928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "peter",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "LeaderboardFeatureSteps.the_user_is_the_number_on_the_leaderboard(String,int)"
});
formatter.result({
  "duration": 528522500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 33
    }
  ],
  "location": "LeaderboardFeatureSteps.the_user_is_the_number_on_the_leaderboard(String,int)"
});
formatter.result({
  "duration": 518955069,
  "status": "passed"
});
});