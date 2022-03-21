# Currency Selector Component

## Description

A component with buttons, which select and unselect a currency, and display it. To select the currency ( for example EUR ), click the respective button. To unselect it, either click the same button again, or the X button that appeared along with the selected currency box. Made as part of an interview to assess my skills. I had an image of the component, and I was called to replicate the exact image with the functionalities mentioned above.

## Compatibility

This component has been optimized to function well with most of the modern browsers for computer and phone. 
Tested in various Android and Iphone physical devices, Windows and Linux OS at the following browsers:
Mozilla Firefox, Google Chrome, Opera, Edge,  Firefox Mobile, Google Chrome mobile, Safari. This component does **not** function well for the IE11 and discontinued Android Browser, due to lack of support in different core features used in my component

## Instructions 

### For obtaining the component

In order to obtain/download the component, the following steps should be done:
  
 1. **---If you do have git and NodeJS on your system already, skip this step---** Make sure you have latest version of git and NodeJS in your system. Depending on your OS you can install them in the following websites : [git](https://git-scm.com/downloads) , [NodeJS](https://nodejs.org/en/download/package-manager/)

 2. Go to your Terminal. If you have Windows, type "Command Prompt" in search and run it. If you have Mac or Linux, search for **"Terminal"** and run it instead 

 3. Navigate to the directory of your choice using ```cd /my-directory```

 4. Execute the command ``` git clone https://github.com/JimBratsos/Tasks/ ``` This will create a clone to your current directory.

#### For running the component

In order to run the component go to the directory you specified above, open the folder and run index.html.

#### For running the test of the component

In order to check if the component functions correctly, I have created an automated test for it, and it can be executed with the following steps:

1. Go to your terminal, type ``` npm install ``` and execute this command

2. After the installation of the modules finishes, using ``` npx cypress open ```, run the Cypress automation tool application.

3. Finally, click on the **cypresstest.spec.js** file that will appear in the app under the **Integration Tests**. A new browser window will open and the test will start running. It will be successfull if it has green ticks on the left side of the screen.

## Updates from previous version:

1. Used a unified CSS class for every different thing I implemented, in my component, to avoid excessive comma use in my CSS file to include all the IDs.

2. Completely re-wrote HTML and JS files. Added an onload JS function, which loads everything I need for my component (buttons), in order for it to function as I want to. In a few words, I used a for-loop, generated all the buttons with their checkboxes respectively, and appended them in the needed areas. ( for example, I appended the buttons in the grid, and the checkboxes in the buttons ).

3. Removed JQuery reference. 

4. Used local variables that hold referenced elements, in order to simplify the code, make it more readable and reusable **fast**.

5. I think the most important change is mobile responsiveness. Tested in numerous physical devices, Firefox's and Google Chrome's mobile view, the component is responsive until the minimum width of 320px ; thus covering most of today's devices.

6. Tested backwards compatibility in browsers. By checking [CanIUse](https://caniuse.com/), I found out that my component is compatible for almost more than 95% of the userbase; leaving only the Opera Mini and IE11 users out. The reason is that I could not find a simple way to support these two, as it would require a vast amount of changes and code adding, because they do not support lots of the features I used. ( for example the much needed template literals, in order for me to add the styles to my buttons ). 

7. Implemented a test which checks if the component is functioning as it is supposed to do so, by using Cypress

## Made with

I used Vanilla JS, CSS, HTML for the component development and Cypress for automated testing process.
