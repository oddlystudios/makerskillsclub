import styled from "styled-components"

import React from "react"

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  padding: ${props => (props.space ? props.space : "0")};
  display: flex;
  flex-direction: row;
  width: ${props => (props.rowWidth ? props.rowWidth : "100%")};
  justify-content: ${props =>
    props.rowLayout ? props.rowLayout : "flex-start"};
  max-width: ${props => (props.rowMaxWidth ? props.rowMaxWidth : "100%")};
  @media (max-width: 650px) {
    flex-direction: ${props => (props.stack ? "column" : "row")};
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => (props.space ? props.space : "0")} 0;
  width: ${props => (props.columnWidth ? props.columnWidth : "100%")};
  margin: ${props => (props.columnMargin ? props.columnMargin : "0px")};
  align-items: ${props =>
    props.columnLayout ? props.columnLayout : "flex-start"};
  @media (max-width: 650px) {
    width: ${props => (props.columnResize ? props.columnWidth : "100%")};
  }
`
export const Card = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;

  padding: ${props => (props.space ? props.space : "0")};
  width: ${props => (props.columnWidth ? props.columnWidth : "100%")};
  align-items: ${props =>
    props.columnLayout ? props.columnLayout : "flex-start"};
  @media (max-width: 650px) {
    width: ${props => (props.columnResize ? props.columnWidth : "100%")};
    margin: 5px 0px;
  }
`
export const Flex = styled.span`
  flex: 2;
`

export const MapFrame = styled.div`
  height: 400px;
  width: 100%;
  overflow: hidden;
  position: relative;
`
export const Map = props => {
  return <MapFrame>{props.children}</MapFrame>
}
