if (!process.server) {
    const Vue = require('vue').default;
    const Adal = require('vue-adal').default;

    Vue.use(
        Adal,
        <%= JSON.stringify(options.adalOptions, null, 2) %>
    )
}

