README for Developers
=====================

This is a "README" file for any developer working on the Desktop
Client version of my "Finance" application (i.e., anyone working
on this project).


Running the Desktop Client App
------------------------------

I run the Desktop Client app under MAMP on Mac OS X, which means:

* My root directory is at _/Applications/MAMP/htdocs/finance_
* I run the MAMP server on port 8888
* The URL to access the application is _http://localhost:8888/finance/_


Server Requests
---------------

Requests to the server are currently a hack. I've created some pass-thru
PHP scripts in the _php_ directory that call my actual server code. I did
this because MAMP runs on port 8888, and my server code runs on port 8080,
and Sencha ExtJS can't get call port 8080 like that.

What I'm going to do eventually is create a reverse proxy (proxy pass)
directly from MAMP/Apache to the server, so the server code will be available
under _http://localhost:8888/finance/server/_, or something similar, but
at the moment I'm using the PHP scripts.


