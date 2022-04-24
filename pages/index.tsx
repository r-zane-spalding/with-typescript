import React from "react";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import Head from "next/head";
import Section from "../components/Section";

const IndexPage = () => (
  <>
    <Wrapper>
      <Section />
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 5rem)",
          minHeight: 600,
          background: "red",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 5rem)",
          minHeight: 600,
          background: "blue",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 5rem)",
          minHeight: 600,
          background: "green",
        }}
      ></div>
    </Wrapper>
  </>
);

export default IndexPage;
