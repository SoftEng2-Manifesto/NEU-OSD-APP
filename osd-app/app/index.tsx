import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import  SearchBar  from "@/components/SearchBar";
import MainLogo from "@/components/MainLogo";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style = {styles.container}>
        <MainLogo/>
        <SearchBar/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: .5,
    },
});