# angular-reddit-clone
The Practical Exercise from Lesson 1 - Simple Reddit Clone

### Deploying Angular
+ Run `ng build --target=production --base-href` in the relevant directory in command line.
+ To install Now, the deployment software run `npm install -g now`    
+ Once successfully installed, run `cd dist` to get into the distribution folder  
+ In the **dist** folder, run `now`. Follow the prompts, confirm the email, and re-run if required  
+ A line in the command window should read **ready!** with a random address next to it. Beneath that line there should be a **Success! Deployment complete!** message  
+ Follow [the link](https://dist-zsmlciypeh.now.sh) to your deployed website/end product  

---

### Installing Semantic  
+ In your project directory, run `npm install semantic-ui-css jquery --save`. Semantic depends on JQuery, and the save flag updates the package.json file  
+ Open the **.angular-cli.json** file and insert `"../node_modules/semantic-ui-css/semantic.css",` as a **Style**. It must be the first one listed (_i.e. palce it above the default styles.css reference_)  
+ Insert `"../node_modules/jquery/dist/jquery.js", "../node_modules/semantic-ui-css/semantic.js"` into the **Scripts** section.  
+ Update the **styles.css** file to include the custom css for the rows and votes, etc
