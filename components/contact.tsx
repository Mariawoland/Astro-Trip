"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

export default function Contact() {

    const [clicked, setClicked] = useState(false);

    const handleclick = () => {
        setClicked(true);
    }

    const form = useRef(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
            form.current
        ) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    form.current,
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then(
                    (result) => {
                        alert(result.text);
                    },
                    (error) => {
                        alert(error.text);
                    }
                );
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="text-white-1 bg-main-1 mx-1 px-7 py-2 rounded-full w-full">Contact</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] text-white-2 bg-dark-2 border border-white-2 z-[2000]">
                    <DialogHeader>
                        <DialogTitle>Contact</DialogTitle>
                        <DialogDescription>
                            <form ref={form} onSubmit={sendEmail} id="contact-form" className="flex flex-col gap-6 pt-4">
                                <input
                                    type="text"
                                    className="focus:outline-none border border-stone-500 p-2"
                                    name="full_name"
                                    placeholder="Full Name..."
                                />

                                <input
                                    type="email"
                                    className="focus:outline-none border border-stone-500 p-2"
                                    name="email"
                                    placeholder="Email..."
                                />

                                <input
                                    type="text"
                                    className="focus:outline-none border border-stone-500 p-2"
                                    name="service"
                                    placeholder="Service to book..."
                                />

                                <textarea
                                    name="message"
                                    className="focus:outline-none border border-stone-500 p-2"
                                    placeholder="Message..."
                                    rows={1}
                                ></textarea>

                                <input type="submit" onClick={handleclick} className={`cursor-pointer transition-all duration-300 bg-stone-500 py-2 text-white-1 hover:bg-stone-600 ${clicked === true ? "bg-stone-700" : ""}`} value="Send" />
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
