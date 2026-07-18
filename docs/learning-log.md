# Learning Log

## July 16

### problems encountered
- accidentally added project files before branching
- what is the default in `export default ComponentName`
- how do I create components without knowing the structure of the page yet
- how do i create a popup that appears when the user presses the button, and where do i write the state code for that `App.tsx` ot `Button.tsx`
- how do create a form field that takes and assigns inputs to a variable
- now i need to create an event interface/class with an incrimenting id, recorded event name and event date.
- i need to find a way to store the input user event data and list it on it's own page

### what i learned
- how to create new branches off the the main (read docs)
- I learned that without the default line, you need to define the export along with the function declaration.
- without a set structure, I decided to build the atomic parts: buttons, headers, and next the form
- i learned about states, props, array deconstruction, and began to build a structure that will reveal a popup once the button click causes a state change
- i built a basic controlled React form. user input is captured through event handlers, stored in component state using `useState`, and the input fields are bound to that state through the value prop. as the user types, React re-renders the component with the updated state.
- i created a types folder to hold the interfaces that i will import where needed, just `src/types/AgoraEvent.ts` for now.
- the `eventItems` array state now lives in `App.tsx`, making App responsible for storing the list of created events. Inside the `EventForm` component, `handleSubmit` runs when the event creation form is submitted and creates a new event object. `EventForm` then uses a function passed down from `App` as a prop to send the new event object back to `App`, where it is added to the `eventItems` array.
