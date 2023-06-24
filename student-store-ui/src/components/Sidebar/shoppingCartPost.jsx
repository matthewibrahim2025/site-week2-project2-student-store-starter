import React from "react";
import axios from "axios";

const shoppingCartPost = async (shoppingCart) => {
  const addData = async () => {
    const res = await axios.post(`http://localhost:3001/store`, {
      "receipt": shoppingCart,
    });
    console.log(res.data);
  };

  addData();

  return <></>;
};

export default shoppingCartPost;
