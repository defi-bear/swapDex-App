import {
  Button,
  Circle,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronUp } from "../components/icons/ChevronUp";
import { useAccount, useChains, useSwitchChain } from "wagmi";
import { config } from "@/util/wagmi";
import { fonts } from "@/theme/Fonts";
import { networkImage } from "@/util";
import { FC } from "react";

export const NetworkMenu: FC<MenuButtonProps> = ({ ...rest }) => {
  const chains = useChains({ config: config });
  const { chain } = useAccount();
  const { switchChain } = useSwitchChain();

  return (
    <Flex as="nav" alignItems="center">
      <Menu placement="bottom-end" autoSelect={false}>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              background="transparent"
              color="neutral.100"
              padding={0}
              height="1.7rem"
              rightIcon={
                <ChevronUp
                  transition="all 175ms ease"
                  transform={isOpen ? "" : "scaleY(-1)"}
                />
              }
              _hover={{ bg: "transparent" }}
              _active={{ bg: "none" }}
              _expanded={{ bg: "transparent" }}
              {...rest}
            >
              {chain ? networkImage(chain.name) : networkImage("Ethereum")}
            </MenuButton>

            <MenuList
              background="transparent"
              borderColor="primary.dark"
              backdropFilter="blur(16px)"
              borderRadius="12px"
              px="5px"
            >
              {chains.map((network) => {
                return (
                  <MenuItem
                    color="neutral.300"
                    background="transparent"
                    key={network.id}
                    fontFamily={fonts.body}
                    fontWeight="600"
                    fontSize="1rem"
                    borderRadius="12px"
                    mb="8px"
                    _hover={{ bg: "surface.secondary" }}
                    onClick={() => switchChain({ chainId: network.id })}
                  >
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      w="100%"
                    >
                      <HStack gap="10px">
                        {networkImage(network.name)}

                        <Text>{network.name}</Text>
                      </HStack>

                      {network === chain && (
                        <Circle size="7px" bg="rgb(64, 182, 107)" />
                      )}
                    </Flex>
                  </MenuItem>
                );
              })}
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};
