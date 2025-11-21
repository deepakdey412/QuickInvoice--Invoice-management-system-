import React, { useState, useContext } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import InvoiceForm from "../components/InvoiceForm";
import TemplateGrid from "../components/TemplateGrid";

const MainPage = () => {
  const { invoiceTitle, setInvoiceTitle } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    if (isEditing && invoiceTitle.trim() === "") {
      alert("Invoice title cannot be blank!");
      return;
    }
    setIsEditing(!isEditing); // Toggle edit/save
  };

  const cardStyle = {
    width: "100%",
    borderRadius: "0.375rem",
    border: "1px solid #dee2e6",
    backgroundColor: "#fff",
    padding: "1rem",
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        {/* Title Bar */}
        <div className="bg-white border rounded shadow-sm p-3 mb-4">
          <div className="d-flex align-items-center w-100">
            <input
              type="text"
              className="form-control form-control-lg border-0"
              placeholder="Enter your invoice title..."
              value={invoiceTitle}
              onChange={(e) => setInvoiceTitle(e.target.value)}
              disabled={!isEditing}
              style={{ fontWeight: "600", fontSize: "0.9rem" }}
            />
            <button
              className={`btn ms-2 ${isEditing ? "btn-success" : "btn-dark"}`}
              onClick={handleEditClick}
              title={isEditing ? "Save title" : "Edit title"}
              style={{
                height: "calc(1.5em + 1rem + 2px)",
                padding: "0 0.75rem",
                display: "flex",
                alignItems: "center",
                fontSize: "0.85rem",
              }}
            >
              <FaPencilAlt className="me-1" />
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* Invoice Form and Template Grid */}
        <div className="row g-4">
          {/* Invoice Form */}
          <div className="col-12 col-lg-6 d-flex">
            <div style={cardStyle}>
              <InvoiceForm />
            </div>
          </div>

          {/* Template Grid */}
          <div className="col-12 col-lg-6 d-flex">
            <div style={cardStyle} className="d-flex flex-column">
              <TemplateGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
