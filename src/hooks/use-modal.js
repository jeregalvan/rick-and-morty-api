import { useState } from "react";

export const useModal = () => {
    const [modalOpened, setModalOpened] = useState(false);

    const handleModal = (val) => {
      setModalOpened(val);
    }
  
    return {
      handleModal,
      modalOpened
    }
  };