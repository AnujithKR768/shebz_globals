import React from "react";
import NavBarView from "../Navbar/NavBarView";
import FooterView from "../Footer/FooterView";
import WhatsAppButton from "../../Components/WhatsAppButton";

export default function AppLayout({ children }) {
    return (
        <>

            <NavBarView />
            <main className="pt-20">{children}</main>
            <FooterView />
            <WhatsAppButton />
        </>
    );
}
