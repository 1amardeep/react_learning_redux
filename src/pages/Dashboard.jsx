import React, { useState } from "react";
import MilkModal from "../components/MilkModal";
import MilkForm from "../components/MilkForm";
import MilkList from "../components/MilkList";
import Button from "../components/Button";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="container">
      <div className="pt-2">
        <Button className="mb-4" primary rounded onClick={handleShowModal}>
          Add
        </Button>
        {showModal && (
          <MilkModal>
            <MilkForm type="add" closeTheModal={handleShowModal}></MilkForm>
          </MilkModal>
        )}
        {/* <MilkSearch></MilkSearch> */}
        <MilkList></MilkList>
      </div>
    </div>
  );
};

export default Dashboard;
