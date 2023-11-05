import React, { useEffect, useState } from 'react';
import { SendEmail } from '../../services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    validateEmail,
    validateName,
    validateMessage,
    validateWhatsapp,
    validatePhone,
} from '../../services/validation';

 

function InlineError({ error }) {
    return (
        <p className="my-1 text-sm text-red-600 font-subMain font-medium">{error}</p>
    );
} 

function Toast() {
    return (
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        
    );
}


function BookingForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setphone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('India');

    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [whatsappError, setWhatsappError] = useState();
    const [messageError, setMessageError] = useState();
    const [buttonLoading, setButtonLoading] = useState(false);
    const [send, setSend] = useState();

    useEffect(() => {

        // *********** VALIDATION **********
        validateName({ name, setNameError });
        validateEmail({ email, setEmailError });
        validatePhone({ phone, setPhoneError });
        validateWhatsapp({ whatsapp, setWhatsappError });
        validateMessage({ message, setMessageError });

        // ***********
        if (send) {
            toast.success(send.msg, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                
            setSend(null);

            setName('');
            setEmail('');
            setMessage('');
            setWhatsapp('');
            setCountry('');
            setphone('');
            setZip('');
        }
    }, [name, email, phone, whatsapp, message, send, zip, country]);

    const submitHandler = (e) => {
        e.preventDefault();
        setButtonLoading(true);
        if (!nameError & !emailError & !phoneError & !messageError & !whatsappError) {
            SendEmail({ name, email, phone, zip, country, message, whatsapp, setSend }).then(
                () => {
                    setButtonLoading(false);
                }
            );
        }
    };

     return (

        <>
            <Toast/>

            <form className="mt-4 flex flex-col bg-[#f1ece0ff] drop-shadow-xl rounded-lg p-4 shadow-sm" onSubmit={submitHandler}>
                <h2 className="text-orange-500 font-bold text-2xl">Book Your Seat</h2>

                <div className="mt-4">
                    <label className="text-black"  htmlFor="name">Name</label>
                    <input
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
                    {nameError && <InlineError error={nameError} />}

                </div>

                <div className="mt-4">
                    <label className="text-black" htmlFor="phone">phone</label>
                    <input name="phone" value={phone} required onChange={(e) => setphone(e.target.value)} placeholder="Your phone" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
                    {phoneError && <InlineError error={phoneError} />}
                </div>

                <div className="mt-4">
                    <label className="text-black" htmlFor="phone">WhatsApp Number</label>
                    <input name="whatsapp" value={whatsapp} required onChange={(e) => setWhatsapp(e.target.value)} placeholder="Your whatsapp Contact" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
                    {whatsappError && <InlineError error={whatsappError} />}

                </div>

                <div className="mt-4">
                    <label className="text-black" htmlFor="Email">Email</label>
                    <input name="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="Email" type="text" />
                    {emailError && <InlineError error={emailError} />}

                </div>

                <div className="mt-4 flex flex-row space-x-2">
                    <div className="flex-1">
                        <label className="text-black" htmlFor="zip">ZIP</label>
                        <input name="zip" value={zip}  onChange={(e) => setZip(e.target.value)} placeholder="Your ZIP code" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="zip" type="text" />
                    </div>


                    <div className="flex-1">
                        <label className="text-black" htmlFor="Country">Country</label>
                        <input name="country" value={country} required onChange={(e) => setCountry(e.target.value)} placeholder="Your Country" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="Country" type="text" />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="text-black" htmlFor="Message">Message </label>
                    <textarea name="message" value={message} required onChange={(e) => setMessage(e.target.value)} placeholder="Your Message ( Please ellaberate the reason for contacing us for better assistance.)" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="Message"></textarea>
                    {messageError && <InlineError error={messageError} />}

                </div>
                <div className="mt-4 flex justify-center">
                    <button disabled={buttonLoading && true} className="bg-white text-black rounded-md px-4 py-1 hover:bg-orange-500 hover:text-white" type="submit">
                        {buttonLoading ? 'Loading..' : 'SUBMIT'}
                    </button>

                </div>

            </form>





        </>




    )
}

export default BookingForm