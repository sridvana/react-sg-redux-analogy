// Reducers (Departments!)

export const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action
    // add the calim to the payload and return a new payload
    return [...oldListOfClaims, action.payload]
  }
  // we do not care about this action
  return oldListOfClaims;
}

export const accountsBalance = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
}

export const policiesList = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name != action.payload.name);
  }

  return listOfPolicies;
}