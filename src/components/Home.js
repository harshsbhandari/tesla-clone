import React from "react"
import styled from "styled-components"
import Section from "./Section"
import ModelS from "../images/model-s.jpg"
import Model3 from "../images/model-3.jpg"
import ModelX from "../images/model-x.jpg"
import ModelY from "../images/model-y.jpg"
import SolarP from "../images/solar-panel.jpg"
import SolarR from "../images/solar-roof.jpg"
import Accessories from "../images/accessories.jpg"

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelS}
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelX}
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={Model3}
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelY}
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels"
        description="Money back guarantee"
        backgroundImg={SolarP}
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg={SolarR}
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg={Accessories}
        leftBtnText="Order now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
