import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/components/Link/Link";
import templatePageHOC from "@src/services/template/templatePageHOC";

function HomeScreen(props) {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
      </Feed>
      <Footer />
    </Box>
  )
}

export default templatePageHOC(HomeScreen, {
  title: "Home"
})
