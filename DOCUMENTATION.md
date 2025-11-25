# Lilly Technical Challenge Documentation Template

## Approach
*How did you approach this challenge? Did you work through the objectives in any particular order? If so, why? Did you utilize any external resources, such as tutorials, guides, or other materials?*

I began by scanning main.py to become familiar with the available routes and to outline the types of things I could display using them. Next, I listed what a user might want from a UX perspective to get an overview of the features I would include.

I am comfortable with Python, but I had not worked with FastAPI before. To challenge myself, I started with the extension task of writing an endpoint to get the average value of the medicines. After that, I worked with basic HTML to understand what the page would include and gradually added features over time.

I referred to the official FastAPI documentation and some online guides to learn how to handle form data, asynchronous fetch requests, and dynamic rendering with JavaScript.

## Objectives - Innovative Solutions
*For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about.*

For the challenge objectives, I approached the tasks step by step. I started by understanding the data and routes in main.py. Then, I moved on to structuring the front end. I'm particularly proud of implementing the dynamic rendering of medicine cards and the delete functionality. I used event delegation to manage dynamically added elements.

I tested the API endpoints with Postman. This allowed me to see the output and understand the structure of the data being returned.

I revisited some parts of the code several times, especially the JavaScript for fetching data and handling form submissions. I encountered issues with asynchronous rendering and attaching event listeners to elements that weren't there yet. Rewriting those sections helped me understand closures, event delegation, and how the front end interacts with the FastAPI back end.

## Problems Faced
*Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)*.

Each of the medicine cards I created had its own delete and edit button. I initially struggled to make sure the program recognised which medicine a delete button belonged to. The problem was that to access the delete button, it needed to exist in the DOM. Since the cards are rendered dynamically after fetching data, the button didn’t exist yet, and document.querySelector returned null.

After some research, I realised that instead of adding a listener to each delete button individually, I could place a single event listener on the parent container that already exists in the DOM. Then, using a conditional inside the listener, I could check if the click came from a delete button or an edit button. This method let me handle all buttons dynamically without repeating logic for each one.

## Evaluation
*How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?*

If I had more time, I would implement a better way to handle unknown values for future edits or adjustments, e.g. highlighting the values that are unknown. I would also add the edit function since the button is there but not clickable. Additionally, I would include unit tests to make sure that the endpoint I wrote works correctly.