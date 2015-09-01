![Instructor Notes](../../../../img/icons/instr_code_along.png)

##Intro to HTML - Marking Up Content

Below is a suggestion of how to demo / incrementally build this code along.


###Step 1
Show students the copy in sublime text. 

*	__Sample Script:__ HTML is designed to surround pieces of content. Let's start with the following copy: 

	General Assembly offers Classes and Workshops Worldwide
	
	For Immediate Release
	
	General Assembly, which started in New York as a co-working space, now offers classes and workshops in technology, design, and entrepreneurship, with campuses around the world in:
	
	Berlin
	Boston
	Hong Kong
	London
	Los Angeles
	New York City
	San Francisco
	Sydney
	Washington D.C
	
	For more information, visit General Assembly's website.
	

Ask students to read it over and think about what you might call different parts of the text. Here are some questions you may ask:
	
*	__Sample Script:__  How might you describe the piece of text reading "General Assembly offers Classes and Workshops Worldwide"?

*	__Sample Script:__  What is this? (while pointing to content on the screen)
	

With these questions you are asking for students to start to make meaning from the content. (i.e oh that looks like a __list__ of cities, that looks like a title). If they don't have the answers right away then guide them along. We want the tags to mean something so they can look at tags and decide which one is best.


###Step 2

Based on the conversation above, start to demonstrate how you markup the text. You could say something like: 

*	__Sample Script:__  We use HTML to describe this bit of text as a **paragraph**.

```<p>```General Assembly, which started in New York as co working space, now offers classes and workshops in technology, design, and entrepreneurship, with campuses around the world in:```</p>```


###Step 3

Show students patterns, a set of rules they can follow to help them with other tags. Some rules to highlight are:

1. This paragraph of text, when marked up, is surrounded by two tags: an opening tag and a closing tag.
2. In HTML, all tags are enclosed in < and > brackets.
3. For a paragraph, the opening tag is ```<p>```
4. The closing tag is ```</p>```. Most tags in HTML work this way.


###Step 4

Ask students to look at the title. Ask them if this looks like a paragraph or something else.  Introduce students to header tags. 

```General Assembly offers Classes and Workshops Worldwide.```

*	__Sample Script:__ That doesn't seem like it would be a paragraph, it looks like it serves as a title. In HTML, there are tags reserved for this called "heading" tags. The most important one is ```<h1>```.

###Step 5

Continue asking students for their input on the content as you introduce the other tags. If you can include tags that are not included feel free to add them. We ask that you not show ordered list. We want students to practice using Google to find and implement ```<ol>``` during lab time. 
