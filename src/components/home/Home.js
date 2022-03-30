import React from "react";
import styled from "styled-components";

import Section from "../section/Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        lefBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        lefBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        lefBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        lefBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in Taraz"
        description="Money back guarantee"
        backgroundImage="solar-panel.jpg"
        lefBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Soler Roof Costs Less than New Roof Plus Solar Panels"
        backgroundImage="solar-roof.jpg"
        lefBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        lefBtnText="Accessories"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
