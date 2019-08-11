import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		ResultsShow: ResultsShowScreen
	},
	{
		initialRouteName: "Search",
		defaultNavigationOptions: {
			title: "Chillx"
		}
	}
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
