import React from "react";
import styled from "styled-components";
import img from "./assets/user.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 40px;
  box-shadow: 0 0 2px black;
  width: 50%;
  padding: 20px;
`;
const UserImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;
const EventInfoWrapper = styled.div``;

const EventTitle = styled.h3`
  border-bottom: 1px solid black;
  text-align: center;
  font-size: 30px;
`;
const EventHoster = styled.h3`
  margin-top: 5px;
`;
const EventDate = styled.p``;
const EventImage = styled.h3``;
const EventJoinButton = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: transparent;
  width: 30%;
  background-color: #00cc66;
  border: #00cc66;
  cursor: pointer;
`;

const EventFilters = () => {
  return (
    <Wrapper>
      <UserImage src={img} />
      <EventInfoWrapper>
        <EventTitle>Match</EventTitle>
        <EventHoster>Mateusz Stochel</EventHoster>
        <EventDate>12.13.2020 wtorek</EventDate>
        <EventImage />
        <EventJoinButton>Join Event</EventJoinButton>
      </EventInfoWrapper>
    </Wrapper>
  );
};

export default EventFilters;
