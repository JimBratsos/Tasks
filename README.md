# Tasks- Currency Selector Component

## Description

A component with buttons, which select and unselect a currency, and display it. To select the currency ( for example EUR ), click the respective button. To unselect it, either click the same button again, or the X button that appeared along with the selected currency box.

## Instructions 

In order to run the component, the following should be done:

1. Go to https://github.com/JimBratsos/Tasks/ , which is the repository for my component.
  1.a. If you want to just download and preview the component, click **"Clone or download"**, and then **"Download ZIP"**. After the download, extract it and, run index.html .
  1.b. If you want to download and be able to modify and make changes to GitHub, or just download it via the Terminal, click on **"Fork"** instead of **"Clone or download"** and follow the steps below.

2. After fork finishes, it will make a copy of my component which will be available to your repositories. 

3. **---If you do have git on your system already, skip this step---** Make sure you have latest version of git in your system. Depending on your OS you can install it in this website : https://git-scm.com/downloads

4. Go to your Terminal. If you have Windows, type "Command Prompt" in search and run it. If you have Mac or Linux, search for **"Terminal"** and run it instead 

5. Navigate to the directory of your choice using ```cd /my-directory```

6. Execute the command ``` git clone https://github.com/your-github-name/Tasks/ ``` and replace **your-github-name** with your GitHub name. This will create a clone to your current directory.

7. From there, go to the directory you specified above, open the folder and run index.html

## Updates from previous version:

1. Used a unified CSS class for every different thing I implemented, in my component, to avoid excessive comma use in my CSS file to include all the IDs.

2. Completely re-wrote HTML and JS files. Added an onload JS function, which loads everything I need for my component (buttons), in order for it to function as I want to. In a few words, I used a for-loop, generated all the buttons with their checkboxes respectively, and appended them in the needed areas. ( for example, I appended the buttons in the grid, and the checkboxes in the buttons ).

3. Removed JQuery reference. 

4. Used local variables that hold referenced elements, in order to simplify the code, make it more readable and reusable **fast**.

5. I think the most important change is mobile responsiveness. Tested in numerous physical devices, Firefox's and Google Chrome's mobile view, the component is responsive until the minimum width of 320px ; thus covering most of today's devices.

6. Last but not least, I tested backwards compatibility in browsers. By checking [CanIUse](https://caniuse.com/), I found out that my component is compatible for almost more than 95% of the userbase; leaving only the Opera Mini and IE11 users out. The reason is that I could not find a simple way to support these two, as it would require a vast amount of changes and code adding, because they do not support lots of the features I used. ( for example the much needed template literals, in order for me to add the styles to my buttons ). 

**I would have wanted to make a snapshot test for this component, but I unfortunately could not make it. I read the docs for Jest and Jasmine and I do not have the time necessary to learn how to create a test for my component, due to university's duties.**

## Made with

I used Vanilla JS, CSS and HTML. 
