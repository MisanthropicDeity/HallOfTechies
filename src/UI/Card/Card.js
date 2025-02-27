import React from "react";
import classes from "./Card.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Tooltip from '@material-ui/core/Tooltip';

export default function Card(props) {
  return (
    <div className={classes.card}>
      <img src={props.userData.image} alt="img" />
      <div className={classes.details}>
        <h4>{props.userData.name}</h4>
        <p>{props.userData.role}</p>
      </div>
      <div className={classes.bottom}>
        <div className={classes.skills}>
          {props.userData.skills.map(el => {
            el.length > 5 ? <Tooltip title={el} aria-label="add"> <p key={Math.floor(Math.random() * 10000)}>
              {el.substring(0, 5)}...
            </p> </Tooltip> : <p key={Math.floor(Math.random() * 10000)}>
              {el}
            </p>
          }

          )}
        </div>
        <div className={classes.icons}>
          <a
            href={props.userData.link[0]}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <GitHubIcon />
          </a>
          <a
            href={props.userData.link[1]}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <LinkedInIcon />
          </a>
          <a
            href={props.userData.link[2]}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
