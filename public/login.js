AV.init({
    appId: 'PrOF8cJpPaOnVQ4qroKmA7o4-gzGzoHsz',
    appKey: 'PkyUTu1X3ms4Qn2ungDy17cC',
})

var Todo = AV.Object.extend('Todo')


// app Vue instance
var app = new Vue({
    // app initial state
   
    created: function () {
        var user = AV.User.current()
        if (user) {
            // user.isAuthenticated().then(function(authenticated) {
            //   if (authenticated) {
            this.user = user.toJSON()
            //   }
            // }.bind(this))
        }
    },

    watch: {
        'user.objectId': {
            handler: function (id) {
                if (id) {
                    this.fetchTodos(id)
                } else {
                    this.todos = []
                }
            },
        }
    },


    // methods that implement data logic.
    // note there's no DOM manipulation here at all.
    methods: {

        login: function () {
            AV.User.logIn(this.username, this.password).then(function (user) {
                this.user = user.toJSON()
                this.username = this.password = ''
            }.bind(this)).catch(alert)
        },

        signup: function () {
            AV.User.signUp(this.username, this.password).then(function (user) {
                this.user = user.toJSON()
                this.username = this.password = ''
            }.bind(this)).catch(alert)
        },

        logout: function () {
            AV.User.logOut()
            this.user = null
            this.subscription.unsubscribe()
            this.unbind()
        },


    },

})


// mount
app.$mount('.todoapp')