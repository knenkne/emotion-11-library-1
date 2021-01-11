import React from "react";
import styled from "@emotion/styled";


const Title = styled.h1`
  color: turquoise;
`

const TodaysDate = () => <Title>{`Today's date is ${Date()}`}</Title>;

export default TodaysDate;
