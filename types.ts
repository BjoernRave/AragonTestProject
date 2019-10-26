import "next";
import "styled-components";
import { borderRadiusType, boxShadowsType, colorType } from "./lib/theme";

declare module "next" {
  export interface NextPageContext {
    web3: any;
  }
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: colorType;
    boxShadows: boxShadowsType;
    borderRadius: borderRadiusType;
  }
}
