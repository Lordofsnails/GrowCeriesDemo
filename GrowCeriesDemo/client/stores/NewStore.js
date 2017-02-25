Template.NewStore
.events({
    'click .fa-close': function() {
        Session.set('newStore', false);
    }
});
