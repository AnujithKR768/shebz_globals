import React from "react";
import Header from "@/Pages/Home/Header";
import AppLayout from "@/Pages/Layout/AppLayout";

export default function Home() {
    return <Header />;
}

Home.layout = page => <AppLayout>{page}</AppLayout>;
