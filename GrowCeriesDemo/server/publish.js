Meteor.publish('stores', function(){
    return Stores.find({});
});

Meteor.publish('singleStore', function(id){
    check(id, String);
    return Stores.find({_id: id});
});
