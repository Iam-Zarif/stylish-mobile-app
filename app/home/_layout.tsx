import { Slot } from "expo-router";
import Navbar from "../../components/shared/Navbar";
import BottomNav from "../../components/shared/BottomNav";
import React, { useState } from "react";

const HomeLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Navbar onDrawerChange={(open) => setDrawerOpen(open)} />
      <Slot />
      <BottomNav hidden={drawerOpen} />
    </>
  );
};

export default HomeLayout;
