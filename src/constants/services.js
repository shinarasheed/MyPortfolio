import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I have 4 years experience developing client facing web applications of various sizes and complexity using tools in the javaScript and PHP ecosystem`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "mobile app development",
    text: `I also develop apps with React Native. React Native was no-brainer for me due to my web background, it’s Learn one, write everywhere nature and the robust community around it`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "api design and development",
    text: `I have experience modeling databases, designing and developing maintainable and scalabe api with nodejs using the rest architecture and with graphql. I'm very comfortable with mongodb, postgrelsql, mysql, redis and other technologies.`,
  },
]
export default services
