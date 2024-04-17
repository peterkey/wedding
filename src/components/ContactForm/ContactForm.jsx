import { useState } from "react";
import { LuSend } from "react-icons/lu";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <form className='w-full' action='https://formsubmit.co/396c78ed471c25f9bbbc4b8a5f376209' method='POST'>
        <div>
          <input type='hidden' name='_captcha' value='false' />
          <input type='hidden' name='_template' value='table' />
          <input type='hidden' name='_subject' value='New Message' />
          <input type='hidden' name='_next' value='http://localhost:5173/' />
        </div>
        <div className='flex'>
          <div className='w-4/5 mb-8'>
            <label htmlFor='name' className='text-xl'>
              Name:{" "}
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full text-lg p-3 outline-none border-none rounded-md mt-2 bg-[#e0e0e0]'
                required
              />
            </label>
          </div>
        </div>
        <div className='flex'>
          <div className='w-4/5 mb-8'>
            <label htmlFor='email' className='text-xl'>
              Email:{" "}
              <input
                type='text'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full text-lg p-3 outline-none border-none rounded-md mt-2 bg-[#e0e0e0]'
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              />
              <span className='mt-2 hidden text-sm text-red-500'>Please enter a valid email address</span>
            </label>
          </div>
        </div>
        <div className='flex'>
          <div className='w-4/5 mb-8'>
            <label htmlFor='message' className='text-xl'>
              Message:{" "}
              <textarea
                id='message'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='w-full text-lg p-3 outline-none border-none rounded-md mt-2 bg-[#e0e0e0] resize-y min-h-8'
                required></textarea>
            </label>
          </div>
        </div>
        <div className='flex'>
          <button
            type='submit'
            className=' inline-block items-center bg-[#7f1734] hover:bg-[#e0bb95] text-[#fff] rounded-full text-lg border-none outline-none transition-all px-16 py-4 mb-8'>
            Send <LuSend className='w-5 inline' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
