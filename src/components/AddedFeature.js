import React from 'react';
import {connect} from 'react-redux'
import {removeFeature} from '../actions/featureActions'

const AddedFeature = props => {
  // console.log(props.feature.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> props.removeFeature(props.feature.feature)} className="button">X</button>
      {props.feature.feature.name}
    </li>
  );
};

const mapStateToProps = (state) =>{
  return {
    car: state.car,
    // additionalFeatures: state.additionalFeatures,
    // id: state.additionalFeatures.id
  };
}

const mapDispatchToProps = { removeFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
