import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import AllFeatured from "../../components/home/AllFeatured";
import Searchbar from "../../components/home/Searchbar";
import HeroSection from "../../components/home/HeroSection";
import LatestProduct from "../../components/home/LatestProduct";
import BestDeals from "../../components/home/BestDeals";
import BrandMarquee from "../../components/home/BrandMarquee";
import TestimonialsCarousel from "../../components/home/TestimonialsCarousel";
import NewsletterSubscribe from "../../components/home/NewsletterSubscribe";
import Footer from "../../components/shared/Footer";

const Homepage = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="px-4 pt-2">
          <Searchbar />
          <AllFeatured />
          <HeroSection />
          <BrandMarquee />
          <LatestProduct />
          <BestDeals />
          <TestimonialsCarousel />
          <NewsletterSubscribe />
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

export default Homepage;
