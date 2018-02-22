# dev-ote
happy hour voting app, click on bar for info on bars happy hours, 
click vote, sit back and watch the votes increment in real time

# stack
- express server
- react front end deployed to surge
- self created api pushed to heroku

![screen shot 2017-12-28 at 12 14 28 am](https://user-images.githubusercontent.com/31411569/36559151-1b77699a-17db-11e8-86d6-c2a89966bb7c.png)
![screen shot 2017-12-28 at 12 14 37 am](https://user-images.githubusercontent.com/31411569/36559150-1b627a3a-17db-11e8-86f3-3bc366e5a7c9.png)

# still working on additions
- bar graph for results

# inner workings
1 user lands on page 
2 browser makes request to external api to receive infomation about bars(mayb take a few seconds for data to be sent back due to heroku app not being used so much, so the dyno falls a sleep and becomes slow with a response 
3 when user clicks on vote, they make a put request to update the number of votes a bar has 
4 server responds with new incremented value
