import { compose } from 'redux'
import { connect } from 'wxapp-redux'
import * as action from '../../actions/action'
import style from '../../styles/counter.css'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}


connect(mapStateToProps, mapDispatchToProps)({
	
}, style)
