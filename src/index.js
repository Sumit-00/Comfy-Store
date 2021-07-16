import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-7pejujnu.us.auth0.com
// ZMtYvxbSRnoZ0SHi2xzkdSW23bx4ILBT
ReactDOM.render(
  <Auth0Provider
    domain="dev-7pejujnu.us.auth0.com"
    clientId="ZMtYvxbSRnoZ0SHi2xzkdSW23bx4ILBT"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
