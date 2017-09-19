# Answers

1. There are multiple new entries in the `.gitignore` for the new frameworks and services we are using. There are other `.gitignore`s in other folders, defining what each directory has that should not be versioned. for example, the `.gitignore` in `server/src/.gitignore` specifically prevents the versioning of the contents of its own build folder.
2. There are three `build.gradles` one for the client, one for the server, and an overarching one that calls it's lesser siblings.
3. it seems that Angular is set up to handle some varieties of routing entirely client side, replacing the layout of the page with components in a new relevant layout without needing to talk to the server as often
4. `user-list.service.ts` seems to handle all the the logic for getting the info from the server, whereas `user-list.component` handles calling and displaying its results.
