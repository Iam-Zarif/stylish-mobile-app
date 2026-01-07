import { Slot } from "expo-router";
import Navbar from "../../components/shared/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Slot />
    </>
  );
};

export default HomeLayout;
