import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/gamesHooks";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib/esm/iconBase";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconMap: {[key: string] : IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    xbox: FaXbox,
    apk: FaAndroid,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"}/>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
