import "../styles/Loader.css";
import { useLoading } from "../contexts/LoadingContext";

export default function Loader() {
  const { loading } = useLoading();

  return loading ? <div className="loader"></div> : null;
}
