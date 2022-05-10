import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="text-slanted">
          rest, relax, unwind
        </h1>
        <h3>Embrace your choices - we do</h3>
        <Link to="/products" className="hero-btn">
          show now
        </Link>
      </div>
    </section>
  )
}
