import { motion } from "framer-motion"

const App = () => {
  return <div>
    <motion.div className="box bg-amber-600"  id="box1" animate={{ x: 100 }} />
    <motion.div className="box bg-blue-600" id="box1" animate={{ y: 100 }} />
    <motion.div className="box bg-red-600" id="box1" animate={{ translate: "200px" }} />
  </div>;

};

export default App;