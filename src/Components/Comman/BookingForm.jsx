import React from 'react'

function BookingForm() {
    return (


        <div class="mt-4 flex flex-col bg-[#f1ece0ff] drop-shadow-xl rounded-lg p-4 shadow-sm">
            <h2 class="text-orange-500 font-bold text-2xl">Book Your Seat</h2>

            <div class="mt-4">
                <label class="text-black" for="name">Name</label>
                <input placeholder="Your name" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
            </div>

            <div class="mt-4">
                <label class="text-black" for="Number">Number</label>
                <input placeholder="Your Number" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text" />
            </div>
            <div class="mt-4">
                    <label class="text-black" for="Email">Email</label>
                    <input placeholder="Your Email" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="Email" type="text" />
                </div>

            <div class="mt-4 flex flex-row space-x-2">
            <div class="flex-1">
                    <label class="text-black" for="zip">ZIP</label>
                    <input placeholder="Your ZIP code" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="zip" type="text" />
                </div>


                <div class="flex-1">
                    <label class="text-black" for="Country">Country</label>
                    <input placeholder="Your Country" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="Country" type="text" />
                </div>
            </div>


 

            <div class="mt-4">
                <label class="text-black" for="Message">Message</label>
                <textarea placeholder="Your Message" class="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="Message"></textarea>
            </div>
            <div class="mt-4 flex justify-center">
                <button class="bg-white text-black rounded-md px-4 py-1 hover:bg-orange-500 hover:text-white" type="submit">Submit</button>
            </div>
        </div>




    )
}

export default BookingForm