import toast from "react-hot-toast";

const AppToast = {
  success(message) {
    toast.success(message);
  },

  error(message) {
    toast.error(message);
  },

  loading(message) {
    return toast.loading(message);
  },

  info(message) {
    toast(message);
  },

  dismiss(toastId) {
    toast.dismiss(toastId);
  },
};

export default AppToast;
