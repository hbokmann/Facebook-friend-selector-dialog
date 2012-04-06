### Facebook friend selector dialog

Displays all your Facebook friends in a javascript dialog box and allows to select a friend and bind an action to that friend.

If user is already logged in, the index file automatically opens Facebook friend selector dialog.


![Facebook friend selector dialog](http://www.bokmann.com/images/friends.png)


Currently only selecting one friend is supported, in a future release selecting multiple friends will also be implemented.

I used it to post to a friend's wall, so you can use the javascript feed dialog (https://developers.facebook.com/docs/reference/dialogs/feed/) for that and define the "to" property with the selected id (inside the "function process(id)" in index.html).

GitHub Project Page: http://hbokmann.github.com/Facebook-friend-selector-dialog