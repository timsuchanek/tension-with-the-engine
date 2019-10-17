# Engine tension

This is a small experiment to find out, when a package adds files in a postinstall hook, if `npm` or `yarn` are cleaning it.
The answer is: No.
As you can see in the `project` folder by executing `yarn` or `npm install`, the `some-engine` file is being kept, even though it's not part of the shipped [`whipe-me` package](https://www.jsdelivr.com/package/npm/whipe-me)
