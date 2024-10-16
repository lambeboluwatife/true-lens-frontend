"use client";
import { useEffect } from "react";

const AlertMessage = ({ message, type, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const alertClass =
    type === "success" ? "alert alert-success" : "alert alert-danger";

  return <div className={alertClass}>{message}</div>;
};

export default AlertMessage;

// import { useToast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
// import { ToastAction } from "@/components/ui/toast";

// export function ToastDemo() {
//   const { toast } = useToast();

//   return (
//     <Button
//       variant="outline"
//       onClick={() => {
//         toast({
//           title: "Scheduled: Catch up ",
//           description: "Friday, February 10, 2023 at 5:57 PM",
//           action: (
//             <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
//           ),
//         });
//       }}
//     >
//       Add to calendar
//     </Button>
//   );
// }
