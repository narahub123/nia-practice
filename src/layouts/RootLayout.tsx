import { Outlet } from "react-router-dom";
import { Modal } from "../components";

export const RootLayout = () => {
  return (
    <div className="max-w-5xl mx-auto min-h-screen bg-blue-500">
      <Modal>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.CloesButton />
          <Modal.Header>헤더</Modal.Header>
          <Modal.Body>바디</Modal.Body>
          <Modal.Footer>푸터</Modal.Footer>
        </Modal.Content>
      </Modal>
      <Outlet />
    </div>
  );
};
