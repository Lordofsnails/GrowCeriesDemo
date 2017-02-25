if(Meteor.isClient){
    Accounts.onLogin(function(){
        FlowRouter.go('dashboard');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('dashboard');
        }
        BlazeLayout.render('HomeLayout');
    }
});

// FlowRouter.route('/login', {
//   name: 'Login',
//   action() {
//       BlazeLayout.render('Login');
//   }
// });
//
// FlowRouter.route('/register', {
//   name: 'Register',
//   action() {
//     BlazeLayout.render('Register');
//   }
// });


FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render('MainLayout', {main:'Dashboard'});
    }
});


FlowRouter.route('/stores', {
    name: 'stores',
    action() {
        BlazeLayout.render('MainLayout', {main:'Stores'});
    }
});

FlowRouter.route('/browse-stores', {
    name: 'browse-stores',
    action() {
        BlazeLayout.render('MainLayout', {main:'BrowseStores'});
    }
});

FlowRouter.route('/stores/:id', {
    name: 'store-single',
    action() {
        BlazeLayout.render('MainLayout', {main:'StoreSingle'});
    }
});

FlowRouter.route('/account', {
    name: 'account-settings',
    action() {
        BlazeLayout.render('MainLayout', {main:'AccountSettings'});
    }
});
