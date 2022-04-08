// JSON

// JSON.stringify
let user = {
    name: "hyoseok",
    age: 22,
    isAdmin: true,
    permissions: ['edit', 'add', 'delete'],
};

let json = JSON.stringify(user);

console.log(typeof json);

console.log(json);

// circular references
let user1 = {
    name: "user1",
    age: 20,
};

let user2 = {
    name: "user2",
    age: 19,
};

user1.follower = user2;
user2.follower = user1;

// let json2 = JSON.stringify(user1); // TypeError: Converting circular structure to JSON

// let json = JSON.stringify(value[, replacer, space])

let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, ['title', 'participants']));
// {"title":"Conference","participants":[{},{}]}

console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']));
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key} : ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
});
/*
 : [object Object]
title : Conference
participants : [object Object],[object Object]
0 : [object Object]
name : John
1 : [object Object]
name : Alice
place : [object Object]
number : 23
occupiedBy : [object Object]
*/

console.log(JSON.stringify(user, null, 2));
/*
{
  "name": "hyoseok",
  "age": 22,
  "isAdmin": true,
  "permissions": [
    "edit",
    "add",
    "delete"
  ]
}
*/

// custom toJSON
let permissions = {
    add: true,
    edit: true,
    delete: false,
};

let admin = {
    name: 'admin',
    permissions,
};

console.log(JSON.stringify(admin, null, 2));
/*
{
  "name": "admin",
  "permissions": {
    "add": true,
    "edit": true,
    "delete": false
  }
}
*/

permissions.toJSON = function() {
    var permissionsString = '';
    for(let key in this) {
        if(typeof this[key] === 'boolean' && this[key]) {
            if(permissionsString === '') permissionsString += key;
            else permissionsString += `|${key}`;
        }
    }
    return permissionsString;
}

console.log(JSON.stringify(admin, null, 2));
/*
{
  "name": "admin",
  "permissions": "add|edit"
}
*/

// JSON.parse
// let value = JSON.parse("", [reviver]);

// reviver
let str = '{"name": "admin","permissions": "add|edit"}';
let allPermissions = ['add', 'edit', 'delete'];

let obj = JSON.parse(str);
console.log(obj); // { name: 'admin', permissions: 'add|edit' }

let obj2 = JSON.parse(str, function(key, value) {
    if(key == 'permissions') {
        let permissionsObject = {};
        let permissionsList = value.split('|');
        for(let permissionName of allPermissions) {
            if(permissionsList.includes(permissionName)) permissionsObject[permissionName] = true;
            else permissionsObject[permissionName] = false;
        }
        return permissionsObject;
    } else return value;
});
console.log(obj2);
/*
{
  name: 'admin',
  permissions: { add: true, edit: true, delete: false }
}
*/