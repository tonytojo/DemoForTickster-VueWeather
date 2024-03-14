// ****************************************************************************
// *                                                                          *
// *    main.js   ver 2.0                                                     *
// *                                                                          *
// ****************************************************************************

import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// ----------------------------------------------------------------------------
// *** NEW VUE ***
// ----------------------------------------------------------------------------
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')