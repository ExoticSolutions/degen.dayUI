import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_ID}
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: "dark",
          landingHeader: "degen.day",
          logo: "https://ipfs.io/ipfs/QmTquRGUdyB7ERF3HjLcAd1wDVE17usXC7xPqvPQszfTpq",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);
