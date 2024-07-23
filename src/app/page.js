import Image from "next/image";
// import styles from "./page.module.css";
import styles from './style/style.css'
import Addtask from "./components/Addtask";
import DisplayTask from "./components/DisplayTask";

export default function Home() {
  return (
    <div className="main-page">
      <Addtask/>
      <DisplayTask/>
    </div>
  );
}
