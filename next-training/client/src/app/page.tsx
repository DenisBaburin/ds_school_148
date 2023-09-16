import Image from "next/image";
import styles from "./page.module.css";
import { Icon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Home() {
  return (
    <main>
      <div>
        <svg data-testid="DeleteIcon"></svg>
        <Icon></Icon>
      </div>
    </main>
  );
}
