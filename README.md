# Reusable Modal for React
## Features 
- CreatePortal Api
- Slot based (children prop)
- A11y
- 
## Install
WIP

## Basic setup
Wip...

```tsx
//...anywhere
return(
  <>
    <DynamicModal></DynamicModal>
  </>
);
```
To better handle the logic of this modal anywhere in our App without declaring a global store or drilling props, we can abstract the logic into a custom hook.

Create a file `useModal.tsx`
