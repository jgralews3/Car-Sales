import React from 'react';
import {addFeature} from '../actions/featureActions'
import {connect} from 'react-redux'

const AdditionalFeature = props => {
  // console.log(props.car)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=> props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
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

const mapDispatchToProps = { addFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
