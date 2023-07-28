import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  // Define custom color palette
  const colors = {
    primary: "#000000", // Black
    secondary: "#808080", // Grey
    background: "#ffffff", // Grey
    navbar: "#000000", // Black
  };

  // Override the default theme palette with custom colors
  theme.palette = {
    ...theme.palette,
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      alt: colors.background,
      navbar: colors.navbar,
    },
  };

  return (
    <Box
      className="background-image"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Box
        bgcolor={colors.navbar}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="white">
          ArtHive
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        boxShadow={theme.shadows[3]}
        bgcolor={colors.background}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to ArtHive!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
