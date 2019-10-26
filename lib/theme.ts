const colors = {
  firstColor: "#49afd7",
  secondColor: "#FFF27A",
  warning: "#D41638",
  success: "#00D563",
  grey1: "#F7F7F7",
  grey2: "#F1F1F1",
  grey3: "#E4E4E4",
  grey4: "#CCC",
  grey5: "#B3B3B3",
  grey6: "#808080",
  grey7: "#4C4C4C",
  grey8: "#1D1D1D",
  preset: {
    aragon:
      " background: rgb(255, 93, 93); background: linear-gradient( 45deg, rgba(255, 93, 93, 1) 0%, rgba(255, 129, 92, 1) 100% );"
  }
};

const boxShadows = {
  default:
    "0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149)",
  hover: "0 1px 3px 0 rgba(60,64,67,0.302),0 4px 8px 3px rgba(60,64,67,0.149)",

  special: {
    double: "0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2)",
    thin: "0px 30px 60px rgba(0,0,0,0.12)"
  },
  preset:
    "box-shadow: 0 1px 2px 0 #ff6e5d,0 1px 3px 1px #ff6e5d; transition: all linear 0.1s; :hover { box-shadow: 0 1px 3px 0 #ff6e5d,0 4px 8px 3px #ff6e5d }"
};

const borderRadius = {
  normal: "10px",
  strong: "20px"
};

export const theme = {
  colors,
  boxShadows,
  borderRadius
};

export type colorType = typeof colors;

export type colorInputType = keyof typeof colors;

export type boxShadowsType = typeof boxShadows;
export type borderRadiusType = typeof borderRadius;

export default theme;
