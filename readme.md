1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: getElementById use for select specific single element.
        getElementsByClassName use for select all elements that have this class.
        querySelector use for selects the first element matching the CSS selector. and querySelectorAll use for selects all elements matching the CSS selector.

2. How do you **create and insert a new element into the DOM**?
Answer: first creat an elements - const newDiv = document.createElement("div");
        add content `html content here`
        appendChild document.appendChild(newDiv); 

3. What is **Event Bubbling** and how does it work?
Answer: When you click an button in an element that works for button to root element. Works for child and parents.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Using event bubbling to manage actions for numerous children, event delegation involves attaching a single event listener to a parent element rather than each child.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: preventDefault() use for stop default action. When form button click it auto reload use it for remove
        this default action.
        stopPropagation() use for Stop the event from reaching parent elements.