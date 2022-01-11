# Instructions

Create a component called "Countdown" that counts down from any number to 0.

See the final result [here](https://18xp0422ol.codesandbox.io/).

## Requirements

The countdown timer should:

- start from any number and count to 0
- default to 30 if no number is provided
- show a number on screen representing the current count
- update the count every 1 second
- stop counting down after reaching 0
- show a "Time's up!" message when the count reaches 0
- make sure to remove the counter when unmounting

## Approach

- accept a prop "number" for the starting number
- keep a local state prop for the current count
- default state to 30 if no number prop is provided

With hooks:

- use `useRef` to track the timer
- use `useEffect` to start and stop the timer

With a class component:

- use `componentDidMount` to start counting down, changing the number every 1 second (1000 ms)
- use `componentWillUpdate` to stop counting if the next value will be 0 (kill the timer)
- conditionally show the time's up message if the state value is 0
- use `componentWillUnmount` to kill the timer
