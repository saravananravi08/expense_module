import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Label from './label'
import Input from './input'


function MyDialog({isOpen,onClose,message, setMessage, item , approve, handlesubmit}) {
//   let [isOpen, setIsOpen] = useState(true)

  return (
    <Dialog
  as="div"
  className="fixed inset-0 z-10 overflow-y-auto"
  open={isOpen}
  onClose={onClose}
>
  <div className="min-h-screen px-4 text-center">
    <Dialog.Overlay className="fixed inset-0" />

    <span className="inline-block h-screen align-middle" aria-hidden="true">
      &#8203;
    </span>

    <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Enter Message
      </Dialog.Title>
      <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Input id="message" placeholder="Enter the message here" value={message} 
          onChange={(e) => setMessage(e.target.value)} />
        </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={(e) => {
            onClose()
            handlesubmit(e,item,approve,message)}}
        >
          Done
        </button>
      </div>
    </div>
  </div>
</Dialog>

  )
}




export default MyDialog