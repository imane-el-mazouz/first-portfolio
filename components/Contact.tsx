"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.sendForm(
        "service_z0fpduo",
        "template_bo1f02a",
        e.currentTarget,
        "Ue2DnwqoWPV601Tss"
      );
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section bg-surface-raised/40">
      <div className="section-inner">
        <p className="eyebrow">Let&apos;s talk</p>
        <h2 className="section-title">Contact</h2>
        <p className="section-lead">
          I&apos;m all ears! Feel free to reach out with any question or request for
          information. I&apos;d be happy to help.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12 mb-12">
          <div className="card p-6 flex items-center gap-4">
            <i className="bi bi-geo-alt text-accent-light text-2xl" />
            <div>
              <h3 className="text-white font-semibold mb-1">Address</h3>
              <p className="text-sm text-zinc-400">{contactInfo.address}</p>
            </div>
          </div>
          <div className="card p-6 flex items-center gap-4">
            <i className="bi bi-envelope text-accent-light text-2xl" />
            <div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              {contactInfo.emails.map((email) => (
                <p key={email} className="text-sm text-zinc-400">
                  {email}
                </p>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 md:p-10 grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent"
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="md:col-span-2 bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent"
          />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Message"
            className="md:col-span-2 bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent resize-none"
          />

          <div className="md:col-span-2 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-sm">
              {status === "loading" && <span className="text-zinc-400">Sending...</span>}
              {status === "success" && (
                <span className="text-emerald-400">
                  Your message has been sent. Thank you very much!
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400">An error occurred. Please try again.</span>
              )}
            </p>
            <button type="submit" disabled={status === "loading"} className="btn-accent">
              Send message <i className="bi bi-send" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
