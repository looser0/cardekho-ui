import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//toast.configure globally to avoid like <ToastContainer />
   // (<div>
   //    <button onClick={notify}>Notify!</button>
   //    <ToastContainer />
   // </div>)
toast.configure({
   position:toast.POSITION.BOTTOM_RIGHT
});
export const succuess = (message)=>{
   if (message != null && message !== undefined && message != '')
      toast.success(message);
}
export const error = (message)=>{
   if (message != null && message !== undefined && message != '')
      toast.error(message);
}
export const warning = (message)=>{
   if (message != null && message !== undefined && message != '')
      toast.warning(message);
}
export const info = (message)=>{
   if (message != null && message !== undefined && message != '')
      toast.info(message);
}
export const byDefault = (message)=>{
   if (message != null && message !== undefined && message != '')
      toast.default(message);
}


