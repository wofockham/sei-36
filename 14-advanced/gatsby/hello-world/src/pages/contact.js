import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => (
  <div style={{ color: 'teal' }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact Me" />
    <p>Send me a message: chunkylover69@aol.com</p>
  </div>
);
