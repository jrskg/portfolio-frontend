import React from 'react';
import { motion } from "framer-motion";

interface Props{
  text:string;
  textStyle?:string;
  fromShadow?:string;
  toShadow?:string;
  includeBar?:boolean;
  isLast?:boolean
}
const GlowText:React.FC<Props> = ({
  text,
  fromShadow = "0 0 8px rgb(96 165 250 / 0)",
  textStyle = "text-blue-400",
  toShadow = "0 0 8px rgb(96 165 250 / 0.5)",
  includeBar,
  isLast
}) => {
  return (
    <motion.span
      className={textStyle}
      animate={{
        textShadow: [fromShadow, toShadow, fromShadow]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {text}{includeBar && !isLast && <span> | </span>}
    </motion.span>
  )
}

export default GlowText