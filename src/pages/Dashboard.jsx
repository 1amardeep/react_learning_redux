import React, { useState } from "react";
import MilkModal from "../components/MilkModal";
import MilkForm from "../components/MilkForm";
import MilkList from "../components/MilkList";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="container">
      <div className="pt-2">
        <button className="button is-primary mb-4" onClick={handleShowModal}>
          Add
        </button>
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
