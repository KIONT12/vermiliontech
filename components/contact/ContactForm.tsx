"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  description?: string;
}

const projectTypes = [
  "Business Website",
  "Landing Page",
  "Portfolio Website",
  "E-Commerce",
  "Website Redesign",
  "Custom Project",
  "Other",
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const defaultProject =
    searchParams.get("project") ??
    searchParams.get("service") ??
    "";

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: defaultProject || "",
    description: defaultProject
      ? `I'm interested in learning more about: ${defaultProject}`
      : "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!form.description.trim()) {
      newErrors.description = "Please describe your project";
    } else if (form.description.trim().length < 20) {
      newErrors.description = "Please provide at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border bg-[#0d1117] px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50 ${
      hasError
        ? "border-red-500/50 focus:border-red-500"
        : "border-zinc-700 focus:border-red-500"
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-green-500/20 bg-green-500/5 p-12 text-center"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
        <p className="mt-3 text-zinc-400">
          Thank you for reaching out. I&apos;ll review your project details and
          get back to you within 24–48 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              email: "",
              company: "",
              phone: "",
              projectType: "",
              description: "",
            });
          }}
          className="mt-6 text-sm font-medium text-red-400 hover:text-red-300"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass(!!errors.name)}
            placeholder="Your full name"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-1 text-xs text-red-400"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass(!!errors.email)}
            placeholder="you@company.com"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-1 text-xs text-red-400"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-300">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputClass(false)}
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-zinc-300">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass(false)}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-zinc-300">
          Project Type <span className="text-red-400">*</span>
        </label>
        <select
          id="projectType"
          value={form.projectType}
          onChange={(e) => updateField("projectType", e.target.value)}
          className={inputClass(!!errors.projectType)}
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <AnimatePresence>
          {errors.projectType && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1 text-xs text-red-400"
            >
              {errors.projectType}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-zinc-300">
          Project Description <span className="text-red-400">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          value={form.description}
          onChange={(e) => updateField("description", e.target.value)}
          className={`${inputClass(!!errors.description)} resize-none`}
          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
        />
        <AnimatePresence>
          {errors.description && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1 text-xs text-red-400"
            >
              {errors.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition-all hover:shadow-red-500/40 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto sm:px-12"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
