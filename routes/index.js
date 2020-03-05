var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var auth = require('../lib/auth');


router.get('/', function(request, response) {
    var fmsg = request.flash();
    var feedback= '';
    if(fmsg.success){
        feedback = fmsg.success[0];
    }
    var title = 'Cafeteria';
    var description = ``;
    var list = template.list(request.list);
    var html = template.HTML(title, list, 
    `
    <div style="color:blue;">${feedback}</div>
    <img src="/images/friend.jpg" style="width:750px; display:block;">
    <link rel="stylesheet" href="/css/style.css">
    <h2>${title}</h2>${description}
    `, 
    `<a href="/topic/create">create</a>`,
    auth.StatusUI(request, response)
    );
    response.send(html);
});

module.exports = router;