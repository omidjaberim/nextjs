import Backdrop from "@mui/material/Backdrop";
import { RingLoader } from "react-spinners";



export default function Loading({ loading }: { loading: boolean }) {
  return (
    <div>
      <Backdrop className="z-50 text-white" open={loading}>
        <RingLoader color="#B28FEE" size={150} />
      </Backdrop>
    </div>
  );
}
