import { motion } from "framer-motion"

const App = () => {
  return <div>
    <motion.div className="box bg-amber-600"  animate={{ x: "100rem" }} />
    <motion.div className="box bg-green-600"  animate={{ x: "10%" }} />
    <motion.div className="box bg-blue-600" animate={{ y: 10 }} />
    <motion.div className="box bg-red-600" animate={{ translate: "200px" }} />
    
    
    <motion.div className="box1 bg-amber-600" />
    <motion.div className="box1 bg-yellow-600" animate={{ rotateY: 50 }} />
    <motion.div className="box1 bg-red-600" animate={{ rotateX: 50 }} />
    <motion.div className="box1 bg-purple-600" animate={{ rotate: 50 }} />
    
    <motion.div className="box1 bg-amber-600" />
    <motion.div className="box1 bg-yellow-600" animate={{ translateY: "2rem", scale: 1.5 }} />
    <motion.div className="box1 bg-red-600" animate={{ translateX: "11rem",scaleX: 1.7 }} />
    <motion.div className="box1 bg-purple-600" animate={{ translateX: "22rem",scaleY: 1.7 }} />
    
    <motion.div className="box1 bg-amber-600" />
    <motion.div className="box1 bg-yellow-600" animate={{ translateY: "2rem", skew: 17 }} />
    <motion.div className="box1 bg-red-600" animate={{ translateX: "11rem",skewX: 17 }} />
    <motion.div className="box1 bg-purple-600" animate={{ translateX: "22rem",skewY: 17 }} />


  </div>;

};

export default App;