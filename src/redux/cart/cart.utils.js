export const addItemToCart = (cartItems, cartitemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartitemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartitemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartitemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartitemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartitemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartitemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartitemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
