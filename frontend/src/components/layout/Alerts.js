import React, { Component, Fragment } from 'react'
import { withAlert, types } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


export class Alerts extends Component {
    
    static propTypes = {
        error: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.alert.show('It Works')
    }
 
    componentDidUpdate(prevProps) {
      const { error, alert } = this.props;
      if (error !== prevProps.error) {
        if (error.msg.name) alert.error('Name is required')
        if (error.msg.email) alert.error('Email is required')
      }
    }
  
    render() {
      return <Fragment />;
    }
  }
  
  const mapStateToProps = (state) => ({
    error: state.errorsReducer
  });
  
  export default connect(mapStateToProps)(withAlert(Alerts));