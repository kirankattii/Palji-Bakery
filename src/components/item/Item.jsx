// // my whishlist page
// import React, { useContext, useEffect, useState } from "react";
// // import { ShopContext } from "../context"
// import "./item.css";
// import { IoIosHeart } from "react-icons/io";

// import img1 from "../../assets/m1.png";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../context/ShopContext";
// import { assets } from "../../assets/assets";
// import { makeApi } from "../../api/callApi";

// const Item = (props) => {
//   const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
//   const [whishlistProductId, setWhishlistProductId] = useState();



//   const addToWhishlist = async () => {
//     try {
//       const response = await makeApi(
//         `/api/create-wishlist/${whishlistProductId}`,
//         "POST"
//       );
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     addToWhishlist();
//   }, [whishlistProductId]);



//   useEffect(() => {
//     // Check if the current product ID is already in the wishlist
//     const checkIfInWishlist = async () => {
//       try {
//         const response = await makeApi(`/api/check-wishlist/${props.id}`, "GET");
//         console.log(response);
//         setIsInWishlist(response.inWishlist); // Set whether the product is in wishlist or not
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     checkIfInWishlist();
//   }, [props.id]);

//   return (
//     <div className="item">
//       <div className="item-card">
//         <IoIosHeart
//           className="watchlist-icon pointer-event "
//           onClick={() => setWhishlistProductId(props.id)}
//         />
//         <Link to={`/openproduct/${props.id}`}>
//           <img
//             // onClick={window.scrollTo(0, 0)}
//             src={props.image}
//             alt=""
//           />
//         </Link>
//         <div className="item-price-name">
//           <p className="item-name">{props.name} </p>
//           <div className="old-new-price">
//             <p className="old-item-price">₹{props.old_price}</p>
//             <p className="new-item-price">₹{props.new_price}</p>
//           </div>
//         </div>
//         <div className="item-cart">
//           {!cartItems[props.id] ? (
//             <div
//               className="item-addto-cart "
//               onClick={() => addToCart(props.id)}
//             >
//               ADD TO CART
//               {/* </h2> */}
//             </div>
//           ) : (
//             <div className="food-item-counter">
//               <img
//                 onClick={() => removeFromCart(props.id)}
//                 src={assets.add_icon_red}
//                 alt=""
//               />
//               <p className="cart-item-no">{cartItems[props.id]}</p>
//               <img
//                 onClick={() => addToCart(props.id)}
//                 src={assets.add_icon_green}
//                 alt=""
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;


import React, { useContext, useEffect, useState } from "react";
import "./item.css";
import { IoIosHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { assets } from "../../assets/assets";
import { makeApi } from "../../api/callApi";

const Item = (props) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const checkWishlist = async () => {
      try {
        const response = await makeApi(`/api/get-my-wishlist`);
        const wishlistItems = response.data; 

        const existsInWishlist = wishlistItems.some(
          (item) => item.productId === props.id
        );

        setIsInWishlist(existsInWishlist);
      } catch (error) {
        console.log(error);
      }
    };

    checkWishlist();
  }, [props.id]);

  const toggleWishlist = async () => {
    try {
      if (!isInWishlist) {
        await makeApi(`/api/create-wishlist/${props.id}`, "POST");
      } 
      // Update the state to reflect the change in wishlist status
      setIsInWishlist(!isInWishlist);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="item">
      <div className="item-card">
        <IoIosHeart
          className={`watchlist-icon pointer-event ${isInWishlist ? 'wishlist-active' : ''}`}
          onClick={toggleWishlist}
        />
        <Link to={`/openproduct/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
        <div className="item-price-name">
          <p className="item-name">{props.name} </p>
          <div className="old-new-price">
            <p className="old-item-price">₹{props.old_price}</p>
            <p className="new-item-price">₹{props.new_price}</p>
          </div>
        </div>
        <div className="item-cart">
          {!cartItems[props.id] ? (
            <div className="item-addto-cart " onClick={() => addToCart(props.id)}>
              ADD TO CART
            </div>
          ) : (
            <div className="food-item-counter">
              <img onClick={() => removeFromCart(props.id)} src={assets.add_icon_red} alt="" />
              <p className="cart-item-no">{cartItems[props.id]}</p>
              <img onClick={() => addToCart(props.id)} src={assets.add_icon_green} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
