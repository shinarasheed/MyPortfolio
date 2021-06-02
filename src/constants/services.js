import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I have more than 3 years of developing client facing web applications of various sizes and complexity using tools in the javaScript and PHP ecosystem`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "mobile app development",
    text: `I have experience developing mobile apps with React Native. I choosed to use React Native because of it’s Learn one, write everywhere nature and the robust community around it`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "api design and development",
    text: `I have experience modeling databases, designing and developing maintainable and scalabe api with nodejs using the rest architecture and with graphql. I'm very comfortable with mongodb, postgrelsql and mysql, redis and other technologies.`,
  },
]
export default services
