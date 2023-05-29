import React, { useEffect, useState } from "react";
import userService from "../service/adminService";

const PurchaseComponent = () => {
  const [purchases, setPurchases] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      let data = await userService.getUsers();
      console.log(data);
      setPurchases(data.users[0].purchases);
    };
    fetchUsers();
  }, []);
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
