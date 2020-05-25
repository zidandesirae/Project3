import axios from 'axios';

export default {
    postUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    postUserLogin: function (id) {
        return axios.post("/api/users/login", id);
    },
    getAllUsersById: function(id) {
        return axios.get(`/api/users/${id.id}`)
    },
    getAllUsersByGroupId: function(groupId) {
        return axios.get(`/api/users/${groupId.groupId}`)
    },


    postGroup: function (groupData) {
        return axios.post("/api/groups", groupData);
    },
    getGroupById: function (id) {
        return axios.get(`/api/groups/${id.id}`)
    },
    getGroupByIdName: function (id) {
        return axios.get(`/api/groups/${id.id}/${id.name}`)
    },


    postEvent: function (eventData) {
        return axios.post("/api/events", eventData);
    }
}