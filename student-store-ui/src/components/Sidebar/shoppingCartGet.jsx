import React from "react";
import axios from "axios";

const shoppingCartGet = async (setReceipt) => {
//   console.log(setReceipt);

  const getData = async () => {
    try{
    const res = await axios.get(`http://localhost:3001/receipts`);
    console.log(res.data);
    setReceipt(res.data);
    } catch (err) {
      console.log(err)
    }

  };

    getData();

  return <></>;
};

export default shoppingCartGet;
