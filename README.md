![Logo](mdf_logo.png)
# Doctors Within Borders
### A crowdsourcing app that improves first response time to emergencies by connecting city 911 dispatchers with certified civilians

<!-- ![Logo](dispatcher.png) -->
<p align="center"> <img src="https://github.com/AndreyBorisKhesin/Warlocks/blob/master/dispatcher.png" width=75%> </p>

## 1. The Challenge

In Toronto, ambulances get to the patient in 9 minutes 90% of the time. We all know that
that the first few minutes after an emergency occurs is critical, and the difference of
just a few minutes could mean the difference between life and death.
Doctors Within Borders aims to get the closest responder within 5 minutes of
the patient to arrive on scene so as to give the patient the help needed earlier.

## 2. Main Features

### a. Web view: The Dispatcher

The dispatcher takes down information about an ongoing emergency from a 911 call, and dispatches a Doctor with the help of our dashboard.

### b. Mobile view: The Doctor

A Doctor is a certified individual who is registered with Doctors Within Borders. Each Doctor is identified by their unique code.

## 3. The Technology

The app uses _Flask_ to run a server, which communicates between the web app and the mobile app. The server supports an API which is used by the web and mobile app to get information on doctor positions, identify emergencies, and dispatch doctors. The web app was created in Angular 2 with Bootstrap 4. The mobile app was created with Ionic 3.

Created by Asic Chen, Christine KC Cheng, Andrey Boris Khesin and Dmitry Ten.
