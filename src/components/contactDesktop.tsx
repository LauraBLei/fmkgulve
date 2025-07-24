"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { handleContactSubmit } from "@/utility/handleContactSubmit";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const ContactFormDesktop = () => {
  const t = useTranslations("ContactComponent");
  const tInfo = useTranslations("ContactInfo");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  {
    /* Clears success message after 5 seconds */
  }
  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [success]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await handleContactSubmit(data);
      setSuccess("Message sent successfully!");
      reset();
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative font-secondary hidden lg:block px-14 py-26">
      {/* Decorative lines */}
      <div className="absolute top-38 left-0 w-full h-px bg-brand-blue z-0" />
      <div className="absolute bottom-38 left-0 w-full h-px bg-brand-blue z-0" />

      <div className="flex items-center justify-center gap-12 xl:gap-20">
        <Image
          src={"/profile/contactHero.webp"}
          alt="Worker fixing floor"
          width={1034}
          height={463}
          className="w-[350px] h-[442px] object-cover rounded-2xl object-[73%] z-20 bg-white"
        />
        <div className="flex flex-col gap-6 text-center min-w-[210px]">
          <div>
            <p className="font-bold text-brand-blue">{t("callText")}</p>
            <p className="text-xs py-1">{t("callSubText")}</p>
            <p className="font-bold text-brand-blue">{tInfo("phone")}</p>
          </div>
          <div>
            <p className="font-bold text-brand-blue">{t("formularText")}</p>
            <p className="text-xs py-1">{t("formularSubText")}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col gap-3 w-full"
        >
          <div className="relative">
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder={t("formPlaceholder.name")}
              className={`contactInputDesktop ${errors.name ? "border-red-600" : "border-[#E4E3E3]"}`}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="validationError">{errors.name.message}</p>
            )}
          </div>
          <div className="relative">
            <input
              {...register("phone", {
                required: "Phone number is required",
                minLength: { value: 8, message: "Phone number is too short" },
              })}
              type="text"
              placeholder={t("formPlaceholder.phone")}
              className={`contactInputDesktop ${errors.phone ? "border-red-600" : "border-[#E4E3E3]"}`}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="validationError">{errors.phone.message}</p>
            )}
          </div>
          <div className="relative">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i,
                  message: "A valid email is required",
                },
              })}
              type="email"
              placeholder={t("formPlaceholder.email")}
              className={`contactInputDesktop ${errors.email ? "border-red-600" : "border-[#E4E3E3]"}`}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="validationError">{errors.email.message}</p>
            )}
          </div>
          <div className="relative">
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: { value: 10, message: "Message is too short" },
              })}
              placeholder={t("formPlaceholder.text")}
              className={`contactInputDesktop h-[110px ${errors.message ? "border-red-600" : "border-[#E4E3E3]"}`}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="validationError">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex justify-center items-center gap-1 py-2 w-[182px] bg-brand-blue text-white font-semibold rounded-xl cursor-pointer hover:bg-[#1c74bc85] active:text-black active:bg-white active:border-1 active:border-brand-blue transition-all duration-300 disabled:opacity-50"
          >
            {loading ? t("loadingTitle") : t("emailTitle")}
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

          {/* Success message */}
          {success && (
            <p className="absolute -bottom-6 text-green-600 text-sm font-medium text-center">
              {success}
            </p>
          )}

          {/* Error message */}
          {error && (
            <p className="absolute -bottom-6 text-red-600 text-sm font-medium  text-center">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
