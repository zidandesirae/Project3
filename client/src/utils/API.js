import axios from 'axios';

export default {
    //!! NewCircle.js
    postGroup: function (groupData) {
        return axios.post("/api/groups", groupData);
    },
    //!! ExistingCircle.js
    getGroupByIdName: function (id) {
        return axios.get(`/api/groups/${id.id}/${id.name}`)
    },
    //!! SignUpForm.js
    postUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    //!! SignUpForm.js
    addUserToGroup: function(userId, groupId) {
        return axios.get(`/api/groups/addUser/${userId}/${groupId}`)
    },

    //!! Login.js
    postUserLogin: function (id) {
        return axios.post("/api/users/login", id);
    },
    // --->>> *** Login.js
    getAllGroupsByUserId: function (id) {
        return axios.get(`/api/groups/${id.id}`)
    },

    //!! GroupInfo.js
    getAllUsersByGroupId: function(id) {
        return axios.get(`/api/users/${id.id}`)
    },
    
    //!! MessageBoard.js
    postMessage: function (messageData) {
        return axios.post("/api/messages", messageData);
    },
    // --->>> *** MessageBoard.js
    getAllMessagesByGroupId: function(groupId) {
        return axios.get(`/api/messages/${groupId.groupId}`)
    }

}