import { Grid, GridItem } from "./Grid";

export const Stitches = () => {
  return (
    <Grid cols={{ "@initial": 2, "@bp2": 3}} css={{ gap: "10px" }}>
      <GridItem colSpan={2}>A</GridItem>
      <GridItem colStart={3} rowSpan={2}>B</GridItem>
      <GridItem colStart={1} rowStart={2}>C</GridItem>
      <GridItem colStart={2} rowStart={2}>D</GridItem>
    </Grid>
  )
}
