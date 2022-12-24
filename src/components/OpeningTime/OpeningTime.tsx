import { Box, Icon } from "@chakra-ui/react";

const isStoreOpened = () => {
  const today = new Date();
  const currentTime = {
    hours: 17,
    minutes: today.getMinutes(),
    seconds: today.getSeconds(),
  };
  const openingTime = {
    hours: 17,
    minutes: 30,
    seconds: 0,
  };
  const closingTime = {
    hours: 23,
    minutes: 30,
    seconds: 0,
  };
  if (
    (currentTime.hours === openingTime.hours &&
      currentTime.minutes > openingTime.minutes) ||
    (currentTime.hours === closingTime.hours &&
      currentTime.minutes < closingTime.minutes) ||
    (currentTime.hours > openingTime.hours &&
      currentTime.hours < closingTime.hours)
  ) {
    return true;
  }
  return false;
};

const openedMessage = "Estamos abertos, vamos até as 23h30.";
const closedMessage = "Estamos fechados, abrimos as 17h30.";

export const OpeningTime = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="10px"
    >
      <Icon
        viewBox="0 0 200 200"
        color={isStoreOpened() ? "green" : "red.500"}
        onClick={() => console.log(isStoreOpened())}
      >
        <path
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>
      {isStoreOpened() ? openedMessage : closedMessage}
    </Box>
  );
};
