  import { Stack } from "expo-router";

  export default function RootLayout() {
    return <Stack
      screenOptions={{
      title: "NEU-OSD",
      headerStyle: {
      backgroundColor: '#blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    {/* Optionally configure static options outside the route.*/}
  </Stack>
  }
