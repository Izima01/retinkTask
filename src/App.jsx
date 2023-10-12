import { useState, useRef, useEffect } from 'react';
import './App.css';
import Hero from './Components/Hero';
import PopularTools from './Components/PopularTools';
import Sidebar from './Components/Sidebar';
import HeaderDesktop from './Components/HeaderDesktop';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { auth, googleProvider } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (showDialog) return dialogRef.current.showModal();
    dialogRef.current.close();
  }, [showDialog]);

  useEffect(() => {
    console.log(auth.currentUser);
  }, [auth.currentUser]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
      toast.error("Sorry we couldn't sign you in");
    } finally {
      if (auth.currentUser) toast.success(`Sign In Successful. Welcome ${auth.currentUser.displayName}`);
      setShowDialog(false);
    }
  }

  return (
    <div className='flex w-full'>
      <div className='hidden lg:block h-screen sticky top-0'>
        <Sidebar />
      </div>
      <div className='w-full lg:w-[calc(100vw-86px)]'>
        <HeaderDesktop setShowDialog={setShowDialog} />
        <main className='lg:mt-8 lg:mx-3'>
          <Hero setShowNav={setShowNav} setShowDialog={setShowDialog} />
          <PopularTools />
          <div className={`lg:hidden h-[calc(100vh-56px)] rounded-lg fixed left-0 top-14 transition-transform duration-300 ease-in-out ${showNav ? 'translate-x-0' : '-translate-x-full'}`}>
            <Sidebar />
          </div>
          <ToastContainer position='top-left' autoClose={3000}></ToastContainer>
          <dialog className={`${showDialog ? 'flex' : 'hidden'} gap-6 bg-white p-5 flex-col`} ref={dialogRef} onClose={() => setShowDialog(false)}>
            <div className='flex gap-8'>
              <h3 className='text-retink-grey text-xl font-semibold'>{auth.currentUser ? 'You are Logged in. Enjpy our services' : "Sign In To Use Our Services"}</h3>
              <button onClick={() => setShowDialog(false)}><AiOutlineCloseCircle size={24} /></button>
            </div>
            <button onClick={signInWithGoogle} className={`border border-[#754DE8] text-[#754de8] px-6 py-1 ${auth.currentUser ? 'hidden' : "flex"} gap-3 items-center w-fit rounded-sm `}>
              Sign in with Google
              <FcGoogle size={24} />
            </button>
          </dialog>
        </main>
      </div>
    </div>
  )
}

export default App
