Rings = new Mongo.Collection('stores');

Stores.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Tags = new SimpleSchema({
    name: {
        type: String
    }
});

RingSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    tags: {
        type: [Tags]
    },
    isPrivate: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
            type: "hidden"
        }
    },
    createdBy:{
        type: String,
        label: "Created By",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Meteor.methods({
    togglePrivate: function(id, currentState) {
        Stores.update(id, {
            $set: {
                isPrivate: true
            }
        });
    },
    togglePublic: function(id, currentState) {
        Stores.update(id, {
            $set: {
                isPrivate: false
            }
        });
    },
    deleteStore: function(id) {
        Stores.remove(id);
    }
});

Stores.attachSchema( StoreSchema );
