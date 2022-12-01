import { HeaderWrapper } from "./styles";
import logo from "../../assets/logo.svg";
import { Icon } from "../Icon";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Icon src={logo} alt="todo" />
    </HeaderWrapper>
  );
};
