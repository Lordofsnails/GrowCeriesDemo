Template.BrowseStores.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('stores');
    });
});

Template.BrowseStores.helpers({
    stores: ()=> {
        return Stores.find({});
    }
});
