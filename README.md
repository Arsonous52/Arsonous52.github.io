# Personal Website

This is a portfolio ive put together which displays my noteworthy projects, and also serves as a learning experience for me to learn web design.

I also created this website as a hub to host the most recent versions of each project for ease of distribution.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This website was created using simple HTML, CSS and Javascript. I had to learn how to write my own functions and create a layout without any prior experience or teaching, meaning I had to freestyle a lot of concepts, and revisit them to ensure everything ran better.

The website is very simple. It uses very minimal Javascript (with the exception of the code for handling tabs and slideshows). The tab chosen on the main page is held in Session Storage so that the end user doesn't have to keep re-selecting the desired tab when going back to the main page.

Styles could likely be further optimised in order to reduce the verbosity of the CSS file.

## Lessons Learned:

As this is my first website I've made seriously, there was a lot to learn. I often would implement something into the website just to later learn a better way of handling it and have to go back to rewrite behaviour, such as when I had to rewrite how buttons on my website were handled in order to support tab indexing for greater accessibility.

I have also learned that in HTML and CSS there are many ways to tackle a singular problem, which builds critical thinking skills and forces you to look at a problem from multiple different angles to decide what may be best to suit your case.

I recall a moment when i was trying to set up the grid that displays the panels for my projects, originally I used a grid layout which changed the amount it would display based on the size of the window, which was very clunky and didn't scale too well. However, once I discovered flex boxes, I rewrote the code to use flex boxes instead and ended up with a much more dynamic and enjoyable method to display the tiles, which made me very joyous once I had it working.