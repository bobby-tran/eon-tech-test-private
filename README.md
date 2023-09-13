# PLEASE ANSWER ALL THESE QUESTIONS YOURSELF AND WITHOUT HELP, DO NOT SHARE THIS MATERIAL ONLINE.

<img src="https://www.eonnext.com/branding/eon/social/social-logo.png" alt="e.on next logo" width="200"/>

# Tech test for a junior to mid developer position at E.ON Next

_Hi, and congratulations to have made it to this stage! You will have one week after receiving access to this repo to finish our e.on next tech test and send over your answers. Good luck!_

_Please clone this repository with your own gitlab account and add all your answers to your cloned repository. Your repository has to be set to private and shared with us as soon as you are finished and before the deadline._

_The folder structure of your repository is entirely up to you, you just need to make sure the files are named as requested_

_Please try to respond to all the questions as best you can, if you should have any questions please feel free to email anton.neike@eonnext.com_

_Writing test cases for your functions will give you bonus points_

## Content

- [Project Description](#project-description)
- [Questions - ways of working](#questions---ways-of-working)
- [Questions - Technical](#questions---technical)

# SMS App Project

## Project Description

You have been tasked with helping to build features for an application for sending SMS messages to E.On Next customers. Messages are sent as part of campaigns which target a specific purpose, e.g. product promotion, surveys, payment reminders.<br>

## Questions - Ways of working

_Please answer these two questions in a respective MD or text file (e.g. w1.txt and w2.txt) saved to the cloned repo._
<br><br>
<b>W1.</b><br>
You have taken the lead on this project which currently has the highest priority on our backlog. On one of the other apps you maintain, the product owner has contacted you personally and asked you to create some new features as well as fix a bug. You feel you cannot complete all of this work in a reasonable amount of time. How would you handle this situation?<br>
<br>
<b>W2.</b><br>
You have a preliminary meeting to discuss some of the features for the SMS app, one of the senior members of the team suggests a solution that you strongly believe will not work. What, if any, actions would you take?<br>
<br>

## Questions - Technical

<b>T1.</b>
<br>A key feature of the app will allow the campaign manager to choose a period of the day when messages will be sent.<br>
In a file named t1, write a function called part*of_day which returns the part of the day based on the hour (24 hour clock).<br>
<br>
Argument:<br>
• An integer (containing the hour of the day from 0 to 23)<br>
<br>
Return value:<br>
• A string (containing the part of the day: morning, afternoon, evening or night)<br>
<br>
The different parts of the day should be defined as follows:<br>
• Before 6 - is night<br>
• 6 to 11 - is morning<br>
• 12 to 17 - is afternoon<br>
• 18 to 23 - is evening<br>
<br>
<br>
<b>T2.</b>
<br>When sending an SMS campaign an ID for each customer in the campaign will be available to the app, e.g. A_7252652.<br>The first letter of the ID represents a region in the UK that the customer is based, e.g. A* = "Eastern".<br>The app will need a feature where the campaign manager can type in a given letter and the number of customers in the campaign associated with that region is returned.<br>
<br>
In a file named t2, write a function called number_of_customers_in_region which returns a count showing how many strings beginning with a specific letter exist in a list of strings.<br>
<br>
Arguments:<br>
• A list of strings<br>
• A letter (could be upper or lower case)<br>
<br>
Return value:<br>
• An integer (containing the count of strings starting with a specific letter that exist in the list)<br>

For example:<br>
• List \[“A*4562525”, “A_8725252”, “G_7252524”, “C_2927359”, “A_4263993”] and "A" should return 3<br>
• List \[“C_67673535”, “B_63535425”, “L_35282421”, “M_6242422”] and "Z" should return 0<br>
• List \[“N_52662525”, “H_9765522”, “W_7524422”, “H1334252”, “I_375522”] and "H" should return 2<br>
• Empty list and any letter should return 0<br>
• List \['', "", '', "", 'A_6565524'] and "G" should return 0 (as there are 0 strings starting with "G" in the list)<br>
<br>
<br>
<b>T3.</b>
<br>For SMS survey campaigns, a campaign is deemed successful if more than 50% of users complete the survey.<br>The app will need to report the percentage of successful campaigns so further action can be taken if this number is too low.<br>
<br>
In a file called t3, write a function called success_percentage which takes a list containing the success rate of each campaign and returns the percentage of results that got 50 or over.<br>
<br>
Argument:<br>
• A list of integers (containing the success rates for a set of campaigns)<br>
<br>
Return value:<br>
• A float (containing the percentage of results which scored 50 or over)<br>
<br>
For example:<br>
• List \[42,8,23,77,13] should return 20.0 (1 result out of 5)<br>
• List \[74,15,19,50,33,31,47] should return 28.57 (2 results out of 7)<br>
• Empty list should return 0.0<br>
<br>
<br>
<b>T4.</b>
<br>As a promotion of E.On Next's new set of electric vehicle tariffs we would like to send customised messages containing a new tariff code that customers can sign up with.<br>Some tariff codes are only to be assigned to certain customer types, e.g. BUSINESS, RESIDENTIAL, SME, OCCUPIER.<br>Tariff codes need to be generated for specific user groups in the following way:<br>
<br>
In t4 write a function called complete_tariff which takes 2 strings as arguments.<br>
<br>
Arguments:<br>
The first string contains an incomplete tariff code with gaps in the code filled by dashes ( - )<br>
For example:<br>
“NEXT_2YR_FIXED*--------_V8” <br>
“VARIABLE_-----------\_ENERGY”<br>
<br>
The second string contains a shorter word representing the customer type, which the function will attempt to fit exactly into the gap in the larger word.<br>
<br>
Return value:<br>
• A string containing the complete tariff code, if the customer type fits into it. Otherwise the function should return None<br>
<br>
For example:<br>
"NEXT_2YR_FIXED\_--------\_V8" and "BUSINESS" would return "NEXT_2YR_FIXED_BUSINESS_V8"<br>
"VARIABLE\_-----------\_ENERGY" and "RESIDENTIAL" would return "VARIABLE_RESIDENTIAL_ENERGY"<br>
"TBC_1YR_FIXED\_----" and "OCCUPIER" would return None<br>
"---\_VARIABLE" and "SME" would return "SME\*VARIABLE<br>
"NEXT_1YR_FIXED\_--------\_V3" and "SME" would return None<br>
<br>
<br>
<b>T5.</b>
<br>Our operations team would like to complete a telephone survey of some of the recipients of earlier SMS campaigns.
<br>The business cannot commit too many Energy Specialists to telephone surveys and therefore each SMS campaign has been given a priority rating, where 0 is the lowest priority.<br>
<br>
Given a list of n campaign priorities, e.g. \[1,0,2,3]<br>
Return the minimum number of Energy Specialists needed to complete the telephone surveys.<br>

- Each campaign must have at least one Energy Specialist dedicated to it.<br>
- Campaigns with a higher rating get more Energy Specialists than adjacent campaigns in the list.<br>
  <br>
  Argument:<br>
- A list of integers (containing the campaign priorities)<br>
  <br>
  Return value:<br>
- An integer (containing the minimum number of Energy Specialists needed to complete the telephone surveys).<br>
  <br>
  For example:<br>
  Input: ratings = [1,0,2]<br>
  Output: 5<br>
  Explanation: You can allocate to the first, second and third campaign with 2, 1, 2 Energy Specialists respectively.<br>
  Input: ratings = [1,2,2]<br>
  Output: 4<br>
  <br>
  Explanation: You can allocate to the first, second and third campaigns with 1, 2, 1 Energy Specialists respectively.<br>
  The third campaign gets 1 Energy Specialist because it satisfies the above two conditions.<br>
  In a file named t5, write a function called min_energy_specialists that calculates the minimum.<br>
  <br>
  <br>
  <b>T6.</b><br>
  In a file named t6 write a function called send_sms_comms that requires a campaign name of type string and a template id of type int and sends this data to the following endpoint:<br>
  https://e7zknnccyg.execute-api.eu-west-2.amazonaws.com/tech/campaign/sms/send<br>
  <br>
  Arguments:<br>
  • campaign_name: "string"<br>
  • template_id: integer<br>
  <br>
  The request should have the following format:<br>
  • The request should be a POST request<br>
  • The body of the request should contain the following information:<br>
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;campaign_name: "string", - You will have to use a variable, as you will need to pass through the value in the next question<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;template_id: "int", - You will have to use a variable, as you will need to pass through the value in the next question<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
  <br>
  • The request should contain the following header:<br>
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x-sms-token: "string", - You will receive your individual token in the email with the link to this repo<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x-api-key: "string" - You will receive your individual api key in the email with the link to this repo<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
  <br>
  The function should log the api response to the console.<br>
  <br>
  The function should return the following:<br>
  • The status code of the API request. (A successful request will return a status code of 200)<br>
  <br>
  <br>
  <b>T7.</b><br>
  Trigger the function with the following arguments:<br>
  <br>
  • campaign_name = "eon_next_tech_test"<br>
  • template_id = 87532<br>
  <br>
