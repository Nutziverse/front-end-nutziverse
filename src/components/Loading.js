import ReactLoading from "react-loading"
import "../style/card-makanan.css"

export default function LoadingComponent({type="bubbles", color="#63AED8", width="6rem", customstyle="min-vh-70"}) {
  return (
    <div className={`container py-5 ${customstyle} d-flex justify-content-center align-items-center`}>
      <ReactLoading type={type} color={color} width={width}></ReactLoading>
    </div>
  )
}