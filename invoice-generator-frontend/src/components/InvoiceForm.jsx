import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FaPlus, FaTrash } from "react-icons/fa";

const InvoiceForm = () => {
  const {
    invoiceData,
    updateBilling,
    updateShipping,
    handleSameAsBilling,
    updateCompany,
    updateInvoiceInfo,
    addItem,
    updateItem,
    deleteItem,
    updateAccount,
  } = useContext(AppContext);

  const [sameAsBilling, setSameAsBilling] = useState(false);

  const handleCheckboxChange = (e) => {
    setSameAsBilling(e.target.checked);
    handleSameAsBilling(e.target.checked);
  };

  const handleItemChange = (index, field, value) => {
    if ((field === "qty" || field === "price") && value < 0) value = 0; // Prevent negative
    updateItem(index, field, value);
  };

  return (
    <div className="invoiceform container py-3">

      {/* Company Info */}
      <div className="mb-3">
        <h6 className="mb-2 fw-bold">Company Info</h6>
        <div className="row align-items-center mb-2">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Company Name"
              value={invoiceData.company.name}
              onChange={(e) => updateCompany("name", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="file"
              className="form-control form-control-sm"
              onChange={(e) => updateCompany("logo", e.target.files[0])}
            />
          </div>
        </div>
        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Email"
            value={invoiceData.company.email}
            onChange={(e) => updateCompany("email", e.target.value)}
          />
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Phone"
            value={invoiceData.company.phone}
            onChange={(e) => updateCompany("phone", e.target.value)}
          />
        </div>
      </div>

      {/* Billing Info */}
      <div className="mb-3">
        <h6 className="mb-1 fw-bold">Bill To</h6>
        <input
          type="text"
          placeholder="Customer Name"
          className="form-control form-control-sm mb-1"
          value={invoiceData.billing.name}
          onChange={(e) => updateBilling("name", e.target.value)}
        />
        <input
          type="text"
          placeholder="Customer Address"
          className="form-control form-control-sm mb-1"
          value={invoiceData.billing.address}
          onChange={(e) => updateBilling("address", e.target.value)}
        />
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Customer Email"
            className="form-control form-control-sm"
            value={invoiceData.billing.email}
            onChange={(e) => updateBilling("email", e.target.value)}
          />
          <input
            type="text"
            placeholder="Customer Phone"
            className="form-control form-control-sm"
            value={invoiceData.billing.phone}
            onChange={(e) => updateBilling("phone", e.target.value)}
          />
        </div>
      </div>

      {/* Shipping Info */}
      <div className="mb-3">
        <h6 className="d-flex justify-content-between align-items-center fw-bold mb-1">
          Ship To
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={sameAsBilling}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">Same as Billing</label>
          </div>
        </h6>
        <input
          type="text"
          placeholder="Recipient Name"
          className="form-control form-control-sm mb-1"
          value={invoiceData.shipping.name}
          onChange={(e) => updateShipping("name", e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipient Address"
          className="form-control form-control-sm mb-1"
          value={invoiceData.shipping.address}
          onChange={(e) => updateShipping("address", e.target.value)}
        />
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Recipient Email"
            className="form-control form-control-sm"
            value={invoiceData.shipping.email}
            onChange={(e) => updateShipping("email", e.target.value)}
          />
          <input
            type="text"
            placeholder="Recipient Phone"
            className="form-control form-control-sm"
            value={invoiceData.shipping.phone}
            onChange={(e) => updateShipping("phone", e.target.value)}
          />
        </div>
      </div>

      {/* Invoice Info */}
      <div className="mb-3 row">
        <div className="col-md-6">
          <h6 className="fw-bold mb-1">Invoice Number</h6>
          <input
            type="text"
            className="form-control form-control-sm"
            value={invoiceData.invoice.number}
            onChange={(e) => updateInvoiceInfo("number", e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <h6 className="fw-bold mb-1">Invoice Date</h6>
          <input
            type="date"
            className="form-control form-control-sm"
            value={invoiceData.invoice.date}
            onChange={(e) => updateInvoiceInfo("date", e.target.value)}
          />
        </div>
      </div>

     {/* Item Details */}
  <h6 className="fw-bold mb-3">📦 Item Details</h6>
<div className="mb-3 border rounded p-3" style={{boxShadow:"0 0 4px rgba(0,0,0,0.25)"}}>

  {/* Heading Row */}
  <div className="d-flex gap-2 fw-semibold border-bottom pb-2 mb-2 text-center small">
    <div className="flex-fill text-start">Item Name</div>
    <div style={{ width: "65px" }}>Qty</div>
    <div style={{ width: "90px" }}>Price</div>
    <div style={{ width: "90px" }}>Total</div>
  </div>

  {/* Item Inputs */}
  {invoiceData.items.map((item, index) => (
    <div
      key={index}
      className="p-2 mb-2 border rounded"
      style={{ boxShadow:"0 2px 4px rgba(0,0,0,0.15)" }}
    >
      <div className="d-flex gap-2 align-items-center">
        <input
          type="text"
          placeholder="Item Name"
          className="form-control form-control-sm flex-fill"
          value={item.name}
          onChange={(e) => handleItemChange(index, "name", e.target.value)}
        />

        <input
          type="number"
          placeholder="Qty"
          className="form-control form-control-sm text-center"
          style={{ width: "70px" }}
          value={item.qty}
          min={1}
          onChange={(e) => handleItemChange(index, "qty", e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="form-control form-control-sm text-center"
          style={{ width: "90px" }}
          value={item.price}
          min={0}
          onChange={(e) => handleItemChange(index, "price", e.target.value)}
        />

        <input
          type="number"
          placeholder="Total"
          className="form-control form-control-sm text-center"
          style={{ width: "90px" }}
          value={item.total}
          readOnly
        />
      </div>

      {/* Delete btn below */}
      <div className="text-end mt-2">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteItem(index)}
        >
          <FaTrash size={12} />
        </button>
      </div>
    </div>
  ))}

  {/* Add button right side */}
  <div className="text-end">
    <button className="btn btn-success btn-sm mt-1" onClick={addItem}>
      <FaPlus className="me-1" /> Add Item
    </button>
  </div>
</div>

      {/* Bank Account Info */}
      <div className="mb-3">
        <h6 className="fw-bold mb-1">Bank Account Info</h6>
        <input
          type="text"
          placeholder="Bank Name"
          className="form-control form-control-sm mb-1"
          value={invoiceData.account.bankName}
          onChange={(e) => updateAccount("bankName", e.target.value)}
        />
        <input
          type="text"
          placeholder="Account Number"
          className="form-control form-control-sm mb-1"
          value={invoiceData.account.accountNumber}
          onChange={(e) => updateAccount("accountNumber", e.target.value)}
        />
        <input
          type="text"
          placeholder="IFSC Code"
          className="form-control form-control-sm"
          value={invoiceData.account.ifscCode}
          onChange={(e) => updateAccount("ifscCode", e.target.value)}
        />
      </div>
    </div>
  );
};

export default InvoiceForm;
