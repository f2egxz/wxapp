import { applyMiddleware, compose } from 'redux'
import thunkMiddleware     from 'redux-thunk'
import loggerMiddleware    from 'redux-logger'

//const en = __REDUX_DEVTOOLS_EXTENSION__ ? __REDUX_DEVTOOLS_EXTENSION__() : compose
const en = compose

export default en(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware()
    )
)
