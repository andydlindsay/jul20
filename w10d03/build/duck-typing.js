"use strict";
const loginUser = (user) => {
    return user.username === 'jstamos';
};
const potentialUser = {
    username: 'alice',
    password: '1234'
};
loginUser(potentialUser);
