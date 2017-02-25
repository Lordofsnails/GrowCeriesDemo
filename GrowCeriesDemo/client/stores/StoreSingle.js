Template.StoreSingle.onCreated(function(){
    var self = this;
    self.autorun(function (){
        var id = FlowRouter.getParam('id');
        self.subscribe('singleStore', id);
    });
});

Template.StoreSingle.helpers({
    store: ()=> {
        var id = FlowRouter.getParam('id');
        return Stores.findOne({_id: id});
    }
});
