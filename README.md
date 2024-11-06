# Food Recipe App
  A responsive and fully functional food recipe app built using React Native. This app enables   
  users to browse recipes by categories, view detailed recipe instructions, ingredients, and watch 
  tutorial videos. Users can also search for specific recipes, mark them as favorites, and more.

# Features
  Recipe Categories: Browse recipes by categories like "Beef," "Chicken," "Vegetarian," etc.
  Recipe Details: View detailed information on selected recipes, including ingredients,       
  instructions, calories, serving sizes, and preparation time.
  YouTube Tutorial Integration: Watch cooking tutorials directly in the app for selected recipes.
  Favorite Recipes: Mark recipes as favorites for easy access.
  Responsive Design: Adapts to different screen sizes.
  Smooth Animations: Uses Reanimated 3.0 for seamless and visually appealing animations.
  Image Caching: Optimizes performance by caching recipe images.

# Tech Stack
  React Native: Core framework for building the app.
  React Navigation: Handles navigation within the app.
  React Native Reanimated: Adds animated transitions and effects.
  TailwindCSS: Utilized for styling with a responsive design.
  Axios: For API requests to fetch recipe data.
  Heroicons: Provides icons for a consistent UI.
  react-native-youtube-iframe: Embeds YouTube videos in recipe details.

# Setup
  Prerequisites
  Ensure you have Node.js, npm, and React Native CLI installed on your machine.
  Install dependencies:
  npm install
  npx create-expo-projectname
  npx expo install react-native-reanimated
  npm install axios
  npm i @react-native-seoul/masonry-list
  npm i react-native-youtube-iframe
  npm i react-native-webview
  npm i react-native-heroicons react-native-svg
  Run the App
  npx react-native run-android   # For Android
  npx react-native run-ios       # For iOS (requires macOS)

# Imports
  import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
  import React, { useEffect, useState } from "react";
  import { CachedImages } from "../helpers/images";
  import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
  import { ChevronLeftIcon, ClockIcon, FireIcon, Square3Stack3DIcon, UserIcon } from "react-native-heroicons/outline";
  import { HeartIcon } from "react-native-heroicons/solid";
  import { useNavigation } from "@react-navigation/native";

# API
  This app uses **TheMealDB** API to fetch recipe data.
  www.themealdb.com/api/json/v1/1/categories.php
  www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
  www.themealdb.com/api/json/v1/1/lookup.php?i=52772

# Code Structure
  components: Contains reusable components like Categories, Recipes, etc.
  screens: Includes main screens like HomeScreen and RecipeDetailScreen.
  helpers: Utility functions, including image caching.
  constants: Holds static data like categoryData.

# Folder Structure
    .
    ├── components      # UI components (e.g., Categories, Recipes)
    ├── helpers         # Helper functions and utilities
    ├── screens         # App screens (Home, Recipe Details)
    ├── assets          # Images and other static assets
    ├── App.js          # Main app entry point
    └── README.md       # Project documentation

# Contributing
  Feel free to open issues or submit pull requests for improvements!

  


  
