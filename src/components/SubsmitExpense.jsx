
import Button from "./ui/button"
import Input from "./ui/input"
import Label from "./ui/label"
import React, { useState } from 'react';
export default function SubmitExpense() {
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [employee_id, setid] = useState('');
const [amount, setamount] = useState('');
const [description, setdescription] = useState('');
const [category, setCategory] = useState('');
const [approver, setApprover] = useState('');
const [error, setError] = useState(false);  

const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setError(false)
  };



const handleApproverChange = (event) => {
    setApprover(event.target.value);
    setError(false)
  };

const handleSubmit = (e) => {
    e.preventDefault(); 
    addPosts(name,employee_id,email,amount,category,description,approver);
    setName('');
    setid('');
    setEmail('');
    setamount('');
    setdescription('');
    setCategory('');
    setCategory('');
    setApprover('');
  };


const handleAmountCondition = (e) => {
    setamount(e.target.value)
    e.preventDefault();
    if(category==='Transportation' & e.target.value < 1000){
        console.log('value need to be higher than 1000')
        setError(true)
    }else{
        setError(false)
    }
}

  return (
    <div className="mx-auto max-w-md space-y-6">
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold">Expense Module</h1>
      <p className="text-gray-500 dark:text-gray-400">Please fill out the form below.</p>
    </div>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="employee-id">Employee ID</Label>
          <Input id="employee-id" placeholder="Enter your employee ID" value={employee_id} onChange={(e) => setid(e.target.value)}  />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  htmlFor="email">Email</Label>
        <Input id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </div>
    
    <div className="space-y-2">
    <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  htmlFor="Expense Type"> Expense Type</Label>
      <select value={category} onChange={handleCategoryChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">Select Type</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="HealthCare">HealthCare</option>
      </select>
      </div>

    <div className="space-y-2">
    <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  htmlFor="Expense Type"> Approver</Label>
      <select value={approver} onChange={handleApproverChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">Select Approver</option>
        <option value="Manager">Manager</option>
        <option value="Team Lead">Team Lead</option>
        <option value="HR">HR</option>
      </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input id="amount" placeholder="Enter amount" value={amount} onChange={(e) => handleAmountCondition(e)}/>
      </div>
      <div className="space-y-2">
      {error && <span style={{ color: 'red' }}>Amount should be greater than 1000</span>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input id="description" placeholder="Enter Description" value={description} onChange={(e) => setdescription(e.target.value)} />
      </div>
      <br></br>
      <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-12 w-full" type="submit"> 
        Submit
      </Button>
      
    </form>
  </div>
  )
}



const addPosts = async (name,employee_id,email,amount,type,description,approver) => {
    await fetch('http://127.0.0.1:8000/expense/add_expense', {
    method: 'POST',
    body: JSON.stringify({
       name:name,
       employee_id:employee_id,
       email:email,
       amount:amount,
       type:type,
       description:description,
       approver:approver
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    alert(data['data'])
    })
    .catch((err) => {
       console.log(err.message);
    alert(err)
    });
    };
