const intitialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };


export const rootReducer = (state = intitialState, action) => {
    
    switch(action.type){
        case "ADD_FEATURE":
            const newFeature = {feature: action.payload}
            console.log("car price: " + state.car.price)
            console.log("feature price: " + action.payload.price)
            return {...state, car: {...state.car, features: [...state.car.features, newFeature], price: state.car.price + action.payload.price}};
        case "REMOVE_FEATURE":
            const oldFeature = {feature: action.payload}
            console.log(oldFeature.feature.price)
            const filter = state.car.features.filter((item)=>{
                return item.feature.id !== oldFeature.feature.id;
            })
            console.log(filter)
            return {...state, car: {...state.car, features: filter, price: state.car.price - oldFeature.feature.price}};
        default:
            return state;
    }
}