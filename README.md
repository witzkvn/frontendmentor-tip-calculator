# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [github](https://github.com/witzkvn/frontendmentor-tip-calculator)
- Live Site URL: [live here](https://frontendmentor-tip-calculator.vercel.app/)

## My process

I started to identify some components that I could reuse in different places, and set my general styling (variables, basic reset...). Then I made all the other components, the calculation logic, and finally some design adjustments and the responsive part. I've done structure + basic styling in the same time.

I choose to use [react-icons](https://github.com/react-icons/react-icons) instead of the given SVG icons to pratice the usage of external package and include them as components.

### Built with

- Semantic HTML5 markup
- CSS custom properties / CSS modules
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- Deployed with [Vercel](https://vercel.com/)

### What I learned

I tried to use the maximum from React : different hooks, factorize in components as soon as possible, use integrated CSS module support...

To have control on inputs, I had to make a complex bonding with states in the <App /> component, in order to get the asked comportment when the value is valid / invalid. I had to find a way to detect the focus in my inputs (because I had to use divs to include an icon, and to give it style depending on my valid / invalid input inside it !). I found a very useful react hook for that :

```js
import { useState, useEffect } from "react";

const useActiveElement = () => {
  const [listenersReady, setListenersReady] =
    useState(false); /** Useful when working with autoFocus */
  const [activeElement, setActiveElement] = useState(document.activeElement);

  useEffect(() => {
    const onFocus = (event) => setActiveElement(event.target);
    const onBlur = (event) => setActiveElement(null);

    window.addEventListener("focus", onFocus, true);
    window.addEventListener("blur", onBlur, true);

    setListenersReady(true);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return {
    activeElement,
    listenersReady,
  };
};

export default useActiveElement;
```

I also had to search for a long time for the best approach to include icons next to the input fields.

The calculation logic was nice to pratice some algorithmics and an efficient JS state management.

### Continued development

It would be interesting to see easier ways to handle float numbers inputs because when using normal state to control the value, as soon as a coma is entered, the value couldn't be parsed and the state was reset to 0.

I'm sure my logic can be optimized and if you have any idea I would love to hear about it 😊 !

### Useful resources

- [CSS shadow](https://getcssscan.com/css-box-shadow-examples) - nice CSS shadows to copy with a single click !
- [useActiveHook code](https://stackoverflow.com/questions/62497193/detecting-which-input-is-focused-react-hooks) - The code for the custom hook I used to detect focus on my inputs

## Author

- Github - [witzkvn](https://github.com/witzkvn)
- Frontend Mentor - [@witzkvn](https://www.frontendmentor.io/profile/witzkvn)
- Linkedin - [Witz Kevin](https://www.linkedin.com/in/kevinwitz/)
