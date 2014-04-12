Finance
=======

This is the "desktop client" of a 'Finance' application I'm building.

The code is based on the book, Mastering Ext JS, so you'll see a lot of
'Packt' code in this codebase, at least initially. As I learn more about
Sencha I'll try to make the code much more my own.


Developers
----------

It's important to note that this Client application now relies on the 
Apache/Nginx server to have mounted the server at the `/uri` location.
Specifically, at this moment, the Login.js controller calls the login
server at `server/login`. Other controllers are about to be changed to
call the server like this, rather than route through the old php scripts.


