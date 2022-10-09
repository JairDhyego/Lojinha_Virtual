import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/item.json";
import { formatCurrency } from "./../utils/formatCurrency";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;
  const { name, imgUrl } = item;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex aligh-items-center">
      <img
        src={imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {quantity}x
            </span>
          )}{" "}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price * quantity)}
        </div>
        <Button
          size="sm"
          onClick={() => removeFromCart(item.id)}
          variant="outline-danger"
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
