import Button from '@mui/material/Button';
import './Button.css'
import React from "react";
export default function CustomiseButton(props) {
    return <Button className={props.className} onClick={props?.onClick} variant="contained" color={props.color} size={props.size}>{props.text}</Button>;
}