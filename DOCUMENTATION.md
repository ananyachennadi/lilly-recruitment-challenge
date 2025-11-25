# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
*How did you approach this challenge? Did you work through the objectives in any particular order? If so, why? Did you utilize any external resources, such as tutorials, guides, or other materials?*

## Objectives - Innovative Solutions
*For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about.*

## Problems Faced
*Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)*.

each of the medicine cards i created had its own dlete and edit button, i struggled on how to ensure the program know which medicine the delete button belonged to. the issue is that to get access to teh delete button there needs to intially be something but it only renders later so it doesnt kniw what it access so it has a value of null. 

after researching i realised instead of looking for each delete button individually you can Put one single event listener on the parent container that already exists in the DOM. that way i didnt have to repeat logic for a dleete button and edit button separately i just used a conditional to see where the click was. 

## Evaluation
*How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?*

If i had more time i would implement a different way that the unknown values are shown for future edits or adjustments