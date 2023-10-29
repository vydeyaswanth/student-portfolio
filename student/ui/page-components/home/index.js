import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Fade, Zoom } from "react-reveal";
import styles from './styles.module.css'
import Card from "./Card";
import CardBox from "./CardBox";
const Home=()=>{
    return <div>
  <div className={styles.image}>
    <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="ok"/>
  </div>
  <Card/>
  <CardBox/>
  </div>
}

export default Home;
