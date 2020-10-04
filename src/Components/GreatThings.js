import React, { useEffect } from "react";
import PropTypes from "prop-types";
import anime from "animejs";
import styles from "./greatthings.module.css";

const GreatThings = (props) => {
    useEffect(() => {
        anime
            .timeline({
                loop: false
            })
            .add({
                targets: ".ml3 .letter",
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 150 * (i + 1)
            })
        return () => true
    }, [])
    return <h1 className={styles.ml3 + " ml3"}>
    {props.text.split("").map((v, index) => (
      <span className="letter" key={index}>{v}</span>
    ))}
  </h1>
}
export default GreatThings;