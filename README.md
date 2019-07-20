Simple web page with an initial list of elements and ability to add elements with button click. 

Requirements: 
	1. Clicking list item toggles font strike-through
	2. No bullet in list item
	3. Button (delete) to the right of each list item
	4. Clicking delete button deletes list item
	5. Supply text in text box and press Enter key or click Enter button adds entry to list
	6. New list entries behaive the same as those added in index.html

Notes/observations:

Initially I created two click listener event handlers - one for the list item and another for the added button. The button click listener event would not get fired so I added the listener to the unordered list and distinguish between a button click and a non-button click.

I use an image in the delete button rather than text because the strike-through was also applied to the button. Using image instead of text was a cheap way out.

I removed some console log messages when I observed updating the UL was firing other events when the item(s) were removed from the list.

