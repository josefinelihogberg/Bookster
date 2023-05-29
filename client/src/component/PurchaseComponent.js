import React, { useEffect, useState } from "react";
import userService from "../service/userService";

const PurchaseComponent = () => {
  const [purchases, setPurchases] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(userService.getUsername());

    const fetchUsers = async () => {
      let data = await userService.getUsers(username);
      setPurchases(data.user.purchases);
    };
    fetchUsers();
  }, [username]);
  console.log(purchases);
  return (
    <div>
      <p>Purchases:</p>
      {purchases?.map((purchase) => (
        <div key={purchase.title}>
          <p>Title: {purchase.title}</p>
          <p>Author: {purchase.author}</p>
          <p>Quantity: {purchase.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default PurchaseComponent;
