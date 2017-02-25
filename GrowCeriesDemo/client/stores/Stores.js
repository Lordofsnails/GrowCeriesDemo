Template.Stores.events({
    'click .new-store': () => {
        Session.set('newStore', true);
    }
})
