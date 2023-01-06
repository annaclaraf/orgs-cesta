import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

import { Texto } from "../../../components/Texto"

import topo from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width;

export function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Texto style={styles.titulo}>{titulo}</Texto>
    </>
  )
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 26,
    color: "white",
    padding: 10
  }
});
