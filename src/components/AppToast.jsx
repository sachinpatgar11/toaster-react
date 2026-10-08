import toast from "react-hot-toast";

const AppToast = {
  success(message) {
    toast.success(message);
  },

  error(message) {
    toast.error(message);
  },

  info(message) {
    toast(message);
  },

  loading(message) {
    return toast.loading(message);
  },

  promise(promise, messages) {
    return toast.promise(promise, messages);
  },

  dismiss(toastId) {
    toast.dismiss(toastId);
  },

  dismissAll() {
    toast.dismiss();
  },
};

export default AppToast;
