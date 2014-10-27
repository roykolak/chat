
This is a basic web server that responds to post request at /chat with a JSON message.

Put any static content in the public folder.

## Installation

1. Install [Node.js](http://nodejs.org/)
2. Run `npm install`
3. Run
     Mac:
       `DEBUG=civisanalytics.chatServer ./bin/www`
     Windows:
       `set DEBUG=civisanalytics.chatServer & node .\bin\www`
4. Open a web browser to [localhost:3000](http://localhost:3000)


## cURL example:

    $ curl http://localhost:3000/chat -d message=Hi
    {"from":"chat server","messageIn":"Hi","message":"When I works, I works hard.\n   When I sits, I sits easy.\n   And when I thinks, I goes to sleep."}%
