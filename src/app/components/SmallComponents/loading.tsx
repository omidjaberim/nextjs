import Backdrop from "@mui/material/Backdrop";



export default function Loading({ loading }: { loading: boolean }) {
  return (
    <div>
      <Backdrop className="z-50 text-white" open={loading}>
        <></>
      </Backdrop>
    </div>
  );
}