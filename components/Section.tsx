import { styled } from "@mui/material";
import Image from "next/image";
import Sponge from "../assets/sponge.gif";
import React from "react";

const SectionWrapper = styled("div")(() => ({
  width: "100%",
  height: "calc(100vh - 5rem)",
  minHeight: 600,
  display: "inline-grid",
  gridTemplateColumns: "1.5fr 1fr",
}));

const ImageWrapper = styled("div")(() => ({
  width: "100%",
  height: "100%",
  position: "relative",
}));

const TextWrapper = styled("div")(() => ({
  display: "grid",
  alignContent: "center",
  gap: "1rem",
  paddingLeft: "1rem",
  color: "rgba(0,0,0,.8)",
}));

const RedText = styled("span")(() => ({ color: "red" }));

const HeaderText = styled("div")(() => ({
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: "normal",
  lineHeight: "114%",
  letterSpacing: "0.05357em",
  textTransform: "uppercase",
}));

const BigText = styled("div")(() => ({
  fontWeight: 500,
  fontSize: 54,
}));

const DescriptionText = styled("div")(() => ({
  fontSize: 16,
  fontFamily: "monospace",
}));

const Section = () => {
  return (
    <SectionWrapper>
      <ImageWrapper>
        <Image src={Sponge} layout="fill" />
      </ImageWrapper>
      <TextWrapper>
        <HeaderText>
          <RedText>//</RedText> Spongebob Robotics
        </HeaderText>
        <BigText>A real sponge in a real place</BigText>
        <DescriptionText>
          Big-sponge, big-adventure, also featured is a nice star and a mean
          squid. Possibly featuring a squirell from Texas.
        </DescriptionText>
      </TextWrapper>
    </SectionWrapper>
  );
};

export default Section;
