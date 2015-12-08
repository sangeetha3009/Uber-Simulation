Simulation of the popular cab service uber with Node.js server. Front end has been designed using AngularJS, Twitter Bootstrap, HTML, CSS and Angular material. A lot of field validations such as a mandatory field validations, dirty data values are checked on the front end using angularJS and angular material design.

Google maps api's have been used extensively to simulate the application. Randomization algorithm is used with google maps to generate uber cars within a particular radius around the user's current location. Driver's from driver database have been associated to these car's (JSON objects). The application uses javascript timer functionalities to move the uber car's from source to destination based on the input source and destination values given by the user.

MongoDB has been used to store videos and sessions. Sessions are stored in Mongostore.

Dynamic pricing algorithm has been implemented based on the day the ride is selected. Price surges are shown for weekend.

Customer's can view billing information after rides and view all bill details under ride history.

The admin module can be used to view the complete statistics of the application such as rides per location, revenue per location using angular charts.
