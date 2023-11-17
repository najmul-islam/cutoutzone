import ThemeRegistry from "@/theme/ThemeRegistry";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/header/Header";
import { Roboto } from "next/font/google";
import { Box, Container } from "@mui/material";
import Footer from "@/components/footer/Footer";
import SideBar from "@/components/sidebar/SideBar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Box component="html" lang="en">
      <ThemeRegistry>
        <ThemeProvider>
          <Box component="body" className={roboto.className}>
            <Header />
            <SideBar />
            <Box>{children}</Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </ThemeRegistry>
    </Box>
  );
}
