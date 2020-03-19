# the-poetic-bloc
web-based poetry generation tool /
/ an English major's computer science project

This site is based on the idea for a digital version of poetry magnets. Often found on the refrigerators of creative writers and language lovers, these magnets display various words that one can move around to create phrases and, theoretically, poetry. In digital form, this display relies on the jQuery UI "draggable" library (https://jqueryui.com/draggable/) which allows the user to move words around on the screen with a simple click-and-drag function. 

On initially opening the site, the program displays in 'liberal' more, with random words from specific part-of-speech categories (nouns, verbs, articles, conjunctions, etc). Menu buttons at the top allow the user to change how the words move (on a 'grid' or 'free-form') and add new words from various themes from the 'more' menu. To refresh the original bank of words, the user can click the title of the page. 

The 'revolutionary' mode of display uses an additional "droppable" library (https://jqueryui.com/droppable/) to cause interaction between certain words. The revolution comes in phases, with 4 or 6 words/phrases in each phase that can be put together in various combinations. Some combinations are humorous, ironic, and/or obviously incorrect. When all the words are touching in the correct combination, the next phase of words will appear. 

JQuery UI is an well-documented and widely-used library, meaning there are more resources explaining how to implement it, and more people on StackOverflow who have already answered questions about it. In the future, I'd be interested in exploring options to use other open-source libraries I've come across that include more complex functions for interaction, as well as accessibility on touch-screen devices. 

I hope this site can be entertaining, as well as a potentially useful tool for anyone who enjoys writing but perhaps feels daunted by the seemingly endless scope of the English language, the pressure of an entirely blank page, and/or the absurdity of the patriarchy. 

Preview the project here: http://myweb.students.wwu.edu/~carrolr8/CS403/the-poetic-bloc/
