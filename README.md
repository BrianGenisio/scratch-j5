# Johnny-Five Scratch Prototype

This is a proof-of-concept that Johnny-Five will work with Scratch.

To get it to work:

- Install the dependencies: `npm install`
- Run the helper app: `node lib/index.js`
- Install the Desktop [(offline)](http://scratch.mit.edu/scratch2download/) version of Scratch 2.0
- While holding SHIFT, select File -> Import Experimental HTTP Extension
- Choose `j5.s2e`

You will see some servo blocks under "More Blocks".  They will work to control the servos.  I was able to get it working a sketch that looks like this:

![screenshot](https://files.gitter.im/rwaldron/johnny-five/muJr/Screen-Shot-2015-01-16-at-10.59.12-PM.png)

This works, but I'm not likely to take it any further.  I'm looking at doing something with Blockly.  Perhaps based off of [Robotnik](https://github.com/makenai/robotnik)?  I'm keeping this around if anyone wants to play with it.
