import React, { createContext, useState } from "react";

// Create context
export const AppContext = createContext();

// Initial invoice data
export const initialInvoiceData = {
  title: "New Invoice",
  billing: { name: "", phone: "", address: "", email: "" },
  shipping: { name: "", phone: "", address: "", email: "" },
  company: { name: "", logo: "", email: "", phone: "", address: "" },
  invoice: { number: "", date: "", dueDate: "" },
  items: [{ name: "", qty: 1, price: 0, total: 0 }],
  account: { bankName: "", accountNumber: "", ifscCode: "" },
  notes: "",
};

// Context provider
export const AppContextProvider = ({ children }) => {
  const [invoiceTitle, setInvoiceTitle] = useState(initialInvoiceData.title);
  const [invoiceData, setInvoiceData] = useState(initialInvoiceData);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  // Update billing info
  const updateBilling = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      billing: { ...prev.billing, [field]: value },
    }));
  };

  // Update shipping info
  const updateShipping = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      shipping: { ...prev.shipping, [field]: value },
    }));
  };

  // Handle "Same as Billing"
  const handleSameAsBilling = (checked) => {
    if (checked) {
      setInvoiceData((prev) => ({
        ...prev,
        shipping: { ...prev.billing },
      }));
    } else {
      setInvoiceData((prev) => ({
        ...prev,
        shipping: { name: "", phone: "", address: "", email: "" },
      }));
    }
  };

  // Update company info
  const updateCompany = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      company: { ...prev.company, [field]: value },
    }));
  };

  // Update invoice info
  const updateInvoiceInfo = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      invoice: { ...prev.invoice, [field]: value },
    }));
  };

  // Add new item
  const addItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { name: "", qty: 1, price: 0, total: 0 },
      ],
    }));
  };

  // Update item field
  const updateItem = (index, field, value) => {
    const newItems = [...invoiceData.items];
    if (field === "qty" || field === "price") {
      value = Math.max(0, parseFloat(value) || 0); // prevent negative
    }
    newItems[index][field] = value;

    // Update total
    const qty = parseFloat(newItems[index].qty) || 0;
    const price = parseFloat(newItems[index].price) || 0;
    newItems[index].total = qty * price;

    setInvoiceData((prev) => ({ ...prev, items: newItems }));
  };

  // Delete item
  const deleteItem = (index) => {
    const newItems = invoiceData.items.filter((_, i) => i !== index);
    setInvoiceData((prev) => ({ ...prev, items: newItems }));
  };

  // Update bank/account info
  const updateAccount = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      account: { ...prev.account, [field]: value },
    }));
  };

  const contextValue = {
    invoiceTitle,
    setInvoiceTitle,
    invoiceData,
    setInvoiceData,
    selectedTemplate,
    setSelectedTemplate,
    updateBilling,
    updateShipping,
    handleSameAsBilling,
    updateCompany,
    updateInvoiceInfo,
    addItem,
    updateItem,
    deleteItem,
    updateAccount,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
