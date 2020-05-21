// People droppng off a form (action creators)

export const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

export const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name,
    }
  };
};

export const createClaim = (name, amountToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountToCollect: amountToCollect
    }
  };
};