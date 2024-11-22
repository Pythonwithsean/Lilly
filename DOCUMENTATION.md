# Lilly Technical Challenge Documentation Template

_This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!_

# Answer

_So when i first saw the objectives i knew i had to create some kind of CRUD functionality for the Medicine Tracker. I immediately went to the main.py to see the REST API endpoints that were available to me get all Medicines, Delete all Medicines, Update Medicines. so i first create a list UI to allow me to fetch all the Medicines and display them added the Add button and the Edit button and then wrote the logic to allow users to delete a medicine and send a new price_

## Approach

_How did you approach this challenge? Did you work through the objectives in any particular order? If so, why? Did you utilize any external resources, such as tutorials, guides, or other materials?_

# Answer

I just started Coding the objectives were pretty clear and i knew already what to do which was to create a UI that interacts with the API endpoints. i did have to research why my javascript modules were not getting imported in my script.js cause i wanted to seperate concerns into their own functions and folders and i noticed that i had to add .js at the end of my imports to get the web server to be able to locate my file E.g ../Frontend/Helpers/CreateMedicine.js without the .js i was having an error which was new to me because in react its been a while since i have had to add the .js

## Objectives - Innovative Solutions

_For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about._

# Answer

For the first Objective displaying the medicines to the user i noticed that some data was corrupted at first i wanted to add some logic not to even display corrupted data in the first place. But i thought if the company has corrupted data it would be nice to let them know in the tracker cause that is what it is there for. So i decided to add a ternary condition to check if any of the properties of medicine was corrupted and if it was i just added the Text _Corrupted Data_

For the averaging out medicine prices when i did some list comprehension i did not include the price of the medicines that were corrupted and only added the medicines that were not corrupted.

If i could re write some stuff i guess the first thing i would do is write some tests to mock functions and ensure they behave the way they are suppose too. Anoter thing is that my variable names and overall readability of code can be improved

## Problems Faced

_Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)_.

# Answer

The only issue i faced was with the imports when i tried to modularize my code

script.js:1 GET http://127.0.0.1:5500/frontend/helpers/createMedicine net::ERR_ABORTED 404 (Not Found)
I would get errors like this and i was lost because i have path intellisense and i put the right path in but it turns out i just had to put .js at the end of the path

## Evaluation

_How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?_

# Answer

Overall the challenge is not hard i would say its just a time thing create a really good UI takes time and trying to integrate the JS with the API you need to plan out stuff which will take time aswell.

If i could do this again and i had more time i would not focus too much on the UI and focus on the JS and API the core functionality
