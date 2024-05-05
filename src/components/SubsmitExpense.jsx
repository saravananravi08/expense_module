import React, { useState } from "react";
import MultiSelectOptions from "./ui/multiselect_options";
import Button from "./ui/button";
export default function SubmitExpense() {
  const [name, setName] = useState("");
  const [description, setDecription] = useState("");
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");
  const [condition, setCondition] = useState(null);
  const [category, setCategory] = useState("");
  const [approval, setApproval] = useState("");
  const [disable, setDisable] = useState(true);

  const [approval_selected, setApprovalSelected] = useState([]);

  const approval_options = [
    { label: "HR", value: "HR" },
    { label: "Project Head", value: "Project Head" },
    { label: "Project Manager", value: "Project Manager" },
  ];

  const receipt_options = [
    { label: "user", value: "user" },
    { label: "approver", value: "approver" },
    { label: "Project Head", value: "Project Head" },
    { label: "Project Manager", value: "Project Manager" },
  ];

  const [receipt_selected, setreceiptSelected] = useState([]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleApprovalChange = (event) => {
    setApproval(event.target.value);
    if (event.target.value === "Based on Condition") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      name,
      description,
      amount,
      content,
      notification,
      condition,
      category,
      approval,
      disable,
      receipt_selected.map((item) => item.value),
      approval_selected.map((item) => item.value)
    );
    addPosts(
      name,
      description,
      category,
      approval,
      condition,
      amount,
      approval_selected.map((item) => item.value),
      notification,
      receipt_selected.map((item) => item.value),
      content
    );
  };

  const handleAlertChange = (e) => {
    setNotification(e.target.value);
  };

  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6 justify-start">
        <h1 className="text-2xl font-bold">Custom Approval</h1>
      </header>
      <main className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
            </div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter the name of the custom approval"
              type="text"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
            </div>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              value={description}
              onChange={(e) => {
                setDecription(e.target.value);
              }}
              placeholder="Enter a description of the custom approval"
              rows="3"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="define-criteria"
              >
                Define Criteria
              </label>
            </div>
            <div className="flex items-center mb-2">
              <label
                className="block text-gray-700 font-normal mb-4"
                htmlFor="description"
              >
                when
              </label>
            </div>

            <select
              value={category}
              onChange={handleCategoryChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Type</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="HealthCare">HealthCare</option>
            </select>

            <br></br>

            <select
              value={approval}
              onChange={handleApprovalChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Approval Type</option>
              <option value="Always Approve">Always Approve</option>
              <option value="Based on Condition">Based on Condition</option>
            </select>

            <br></br>

            <select
              value={condition}
              onChange={handleConditionChange}
              disabled={disable}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Condition</option>
              <option value="greater than"> greater than </option>
              <option value="equals to">equals to</option>
              <option value="less than">less than</option>
            </select>
            <br></br>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              placeholder="Enter amount"
              type="text"
              disabled={disable}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
            />
          </div>

          <div className="mb-2">
            <div className="flex items-center">
              <label
                className="block text-gray-700 font-bold "
                htmlFor="approvals"
              >
                Approvals
              </label>
            </div>
            <MultiSelectOptions
              options={approval_options}
              selected={approval_selected}
              setSelected={setApprovalSelected}
            />
          </div>

          <br></br>

          <div className="mb-4">
            <div className="flex items-center">
              <label
                className="block text-gray-700 font-bold "
                htmlFor="Alert Type"
              >
                Alert Type
              </label>
            </div>
          </div>

          <select
            value={notification}
            onChange={handleAlertChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select type</option>
            <option value="Email"> Email </option>
            <option value="Notification">Notification</option>
            <option value="SMS">SMS</option>
          </select>

          <br></br>

          <div className="flex items-center ">
            <label
              className="block text-gray-700 font-bold "
              htmlFor="description"
            >
              recipients
            </label>
          </div>

          <MultiSelectOptions
            options={receipt_options}
            selected={receipt_selected}
            setSelected={setreceiptSelected}
          />

          <br></br>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="Content"
              >
                Content
              </label>
            </div>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Content"
              placeholder="Enter a Content for the message"
              rows="3"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
        </form>
        <br></br>
        <Button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-12 w-full"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </main>
    </>
  );
}

const addPosts = async (
  name,
  description,
  category_type,
  approval_type,
  condition,
  amount,
  approvers,
  alert_type,
  alert_recipients,
  content
) => {
  await fetch("http://127.0.0.1:8000/expense/add_expense_flow", {
    method: "POST",
    body:
      condition != null
        ? JSON.stringify({
            name: name,
            description: description,
            category_type: category_type,
            approval_type: approval_type,
            condition: condition,
            amount: amount,
            approvers: approvers,
            alert_type: alert_type,
            alert_recipients: alert_recipients,
            content: content,
          })
        : JSON.stringify({
            name: name,
            description: description,
            category_type: category_type,
            approval_type: approval_type,
            amount: amount,
            approvers: approvers,
            alert_type: alert_type,
            alert_recipients: alert_recipients,
            content: content,
          }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data["data"]);
    })
    .catch((err) => {
      console.log(err.message);
      alert(err);
    });
};
