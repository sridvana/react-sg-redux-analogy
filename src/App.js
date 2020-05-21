import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createPolicy, deletePolicy, createClaim } from './actions';
import { policiesList, claimsHistory, accountsBalance } from './reducers';
import { createStore, combineReducers } from 'redux';

console.clear();
console.log('starting redux analogy');

// console.log(Redux);

// const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accountsBalance: accountsBalance,
  policiesList: policiesList,
  claimsHistory: claimsHistory
});

console.log(ourDepartments);

const store = createStore(ourDepartments);
console.log(store);

const action = createPolicy('Alex', 20);

store.dispatch(action);
const state1 = store.getState();
console.log(state1);
const policies1 = state1.policiesList.map((policy) => {
                    return (
                      <h4>{policy}</h4>
                    );
                  });

store.dispatch(createPolicy('Jim', 40));
const state2 = store.getState();
const policies2 = state2.policiesList.map((policy) => {
  return (
    <h4>{policy}</h4>
  );
});

store.dispatch(createPolicy('Bob', 30));
const state3 = store.getState();
const policies3 = state3.policiesList.map((policy) => {
  return (
    <h4>{policy}</h4>
  );
});

store.dispatch(createClaim('Bob', 10));
const state4 = store.getState();
console.log(state4);
const claims4 = state4.claimsHistory.map((claim) => {
  return (
    <h4>{claim.name}: {claim.amountToCollect}</h4>
  );
});

store.dispatch(deletePolicy('Jim'));
const state5 = store.getState();
console.log(state5);
const policies5 = state5.policiesList.map((policy) => {
  return (
    <h4>{policy}</h4>
  );
});


function App() {
  return (
    <div>
      <h1>
        Bag of Money: {state1.accountsBalance}
      </h1>
      {state1.policiesList}
      {policies1}

      <h1>
        Bag of Money: {state2.accountsBalance}
      </h1>
      {state2.policiesList}
      {policies2}

      <h1>
        Bag of Money: {state3.accountsBalance}
      </h1>
      {state3.policiesList}
      {policies3}

      <h1>
        Bag of Money: {state4.accountsBalance}
      </h1>
      {/* {state4.claimsHistory} */}
      {claims4}


      <h1>
        Bag of Money: {state5.accountsBalance}
      </h1>
      {state5.policiesList}
      {policies5}

    </div>
  );
}

export default App;
