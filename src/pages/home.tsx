import React from 'react';
import './home.scss';
import  headerBg from '../images/header.png';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}></header>
      <main>
        <section className="section1"></section>
        <section className="section2"></section>
        <section className="section3"></section>
        <section className="section4"></section>
        <section className="section5"></section>
      </main>
    </div>
  );
};
