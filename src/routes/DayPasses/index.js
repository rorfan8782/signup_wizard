import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'day-passes',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const DayPasses = require('./containers/DayPassesContainer').default
      const reducer = require('./modules/dayPasses').default

      /*  Add the reducer to the store on key 'dayPasses'  */
      injectReducer(store, { key: 'dayPasses', reducer })

      /*  Return getComponent   */
      cb(null, DayPasses)

    /* Webpack named bundle   */
    }, 'dayPasses')
  }
})
