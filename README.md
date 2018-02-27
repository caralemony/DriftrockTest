# DriftrockTest

## Description

Test using the Driftrock API using Node

## Installation Instructions
In your terminal run:
```git clone https://github.com/caralemony/DriftrockTest.git```

Then
```npm i```

And then ```cd functions```

## User Instructions

To find the most sold item run 
```node app.js most_sold```

To find the id of the user with the most sales run 
```node app.js most_loyal```

***Caveats:*** Please note that both functions return the first item or user with the highest number of sales. It does not take into account if there are mutliple items or users with the same number of sales.

For a future sprint I would return all of the top items or users if there are more than 1.

I would also do an additional API call to return the email address of the user rather than just the user ID.

## Tests
To run the tests you can run ```npm run test``` in the terminal
