# CHANGES !!!

### 1. New compiler, React is working on implementing a new compiler. Right now, this technology is being implemented on Instagram and will be released in future versions of React.

### 2. Server Components, third-party frameworks will no longer be necessary as they will be part of React itself.

### 3. Actions, a NEW way to interact with the DOM.

### 4. Document Metadata, an upcoming improvement, empowering developers to do more with less code.

### 5. Assets Loading, allows loading assets behind the scenes, which can improve application loading times and user experience.

### 6. Web Components, will now be part of React.

### 7. Better Hooks, a bunch of them are removed and new players are brought into the game.

Problems that are being addressed:

1. Excessive rendering issues.
2. Problems handling renders when developing.
3. Complex memory handling that causes doubts in novice programmers (useMemo, useCallback, memo)

How they want to improve it:

1. 2. Render handling will be done AUTOMATICALLY by React.
2. Manual implementation hooks will not be necessary for memory handling.

Let's go with the previous topics.

## New Compiler

The current compiler leaves a LOT to be desired, from bad practices and leaving developers prone to implement them with the use of hooks like useMemo, useCallback, memo, etc. that SHOULD ALREADY be part of the library itself.
After many years they have finally listened to the cries of the developers and decided that this handling will be done AUTOMATICALLY, it will be the library itself that decides how and when a state change is made and with it a render.

So, bye useMemo(), bye useCallback(), and bye memo.

Again, as stated above, they are testing these new changes directly on their own products, starting with Instagram before they are made public.

## Server Components

Third-party frameworks are no longer needed, as they will be part of React. One of the qualities that made everyone prefer to use NextJs will come directly to the library itself.
NextJs implemented this idea at the beginning and already in version 13 it is the one used by default, if you have programmed with this framework you will know that to indicate that a component is rendered on the client, the "use client" directive is used. All of this will now be part of React but in reverse, by default components rendered on the client are used and if we want to use Server Components, we will have to use "use server".

Improvements:

- SEO: they increase the result of the web vitals so we can have an improvement in terms of the total score of the application and with this a better positioning in the search engines. - Performance improvements: added to and related to SEO improvements, since one of the most important web vitals is the initial loading speed and the use of Server Components brings with it a VERY fast initial loading so that heavier applications will benefit.
- Server-side execution: now we can execute code on the server side since it is necessary to mount one to be able to implement this type of components.

## Actions

Actions are used with server components and allow calling server functions that mutate data. In the browser, the HTML form element is the traditional way of uploading these mutations, so now React provides them with server actions.

## Web Components

Web Components are a way of implementing components that will be purely made up of HTML, CSS and JS, so they can be incorporated in an agnostic way to any project, regardless of the technology used in the Frontend.

Currently, the incorporation of this type of components to a React project is not done in such a direct way and we need to transform said Web Component to a React one, install a library that solves the problem or write additional code. In version 19, this will no longer be a problem since now it can be used without having to convert it.

## Document Data

Within SEO, elements such as "meta tags", "title", "link tags", etc. are used to be able to identify the different concepts of our application by search engines and thus identify if it will be useful to satisfy the information needs of users.
In order to implement a correct management of them between different routes we had to use extra code, implement third-party libraries, etc. and as I always say, the less we code and the less third-party code we have...the better.
Right now we have our own tags such as <title>, <meta>.

## Assets Loading

In order to avoid having to deal with web vitals issues, such as "INP" (Interaction to Next Paint), one of the things we could do is render the most important thing and then load the rest behind the scenes without the user knowing, this way we load quickly initially and the user can interact with the page.
Now for this we can use the "preload" and "preinit" APIs, which provide better control over the resources that must be loaded and initialized.

## New Hooks !

As I said before, bye useMemo, bye useCallback, bye forwardRef and bye memo, but that doesn't mean that new hooks aren't coming!

### use()

It is used together with promises, asynchronous code and context.

```
const value = use(fetchData());
```

We no longer have to use useContext(), now we just use use(YourContext).

### useFormStatus()

Provides information about the status of a form submission.

```
const { pending, data, method, action } = useFormStatus();
```

or

```
const { status } = useFormStatus();
```

VERY similar to react-hook-form.

### useActionState()

Replaces the previous useFormState() call since the original intention is different from what developers understand.
Previously we thought that it only allowed us to update the state of the form based on the result of the submit.

```
const [state, formAction] = useFormState(fn, initialState, permalink?);
```

But the truth is that it is much more than that, the main idea was to stir up the state of the ACTION used in the hook, wrapping it and returning an action that can be tracked and thus obtain the last value returned by said action. In this way we see that useFormState does not even need to be used in a form!.

So now the changes are:

- the name is changed to "useActionState"
- a "pending" state is added
- it is imported from the "react" library and not from "react-dom"

```
const [state, action, isPending] = useActionState(formAction);
```

### useOptimistic()

It allows us to show a different state while an asynchronous logic is executed.

```
const [ optimisticMessage, addOptimisticMessage] = useOptimistic(state, updatefn);
```

The main idea is that while waiting for the response of an asynchronous call, you can show an "optimistic" state in the meantime so that the user has an immediate response. Once we have the actual response, we show the result of the call.

It is called "optimistic" because it will assume that the result was satisfactory even though we don't know it yet.

## How to upgrade to React 19

First of all, you should know that it is NOT OK to use React 19 for applications that are in production since all these changes are still in testing and can change, and they can present problems.

In order to upgrade your project to React 19 you just have to do:

```
// replace pnpm with your favorite package manager

pnpm upgrade react@canary react-dom@canary

// in the case of npm

npm update react@canary react-dom@canary
```
