"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { handleContactSubmit } from "@/utility/handleContactSubmit";
import { contactValidationRules } from "@/utility/contactValidation";
import { ContactFormValues } from "@/types/common";
import { FormField } from "@/components/FormField";
import { FeedbackMessage } from "./FeedBackMessage";
import { ContactFormInfo } from "./ContactFormInfo";

export const ContactForm = () => {
  const t = useTranslations("ContactComponent");
  const tInfo = useTranslations("ContactInfo");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(""), 5000);
    return () => clearTimeout(timer);
  }, [success]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await handleContactSubmit(data);
      setSuccess("Message sent successfully!");
      reset();
    } catch (err) {
      setError("Message failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-secondary">
      {/* Desktop form */}
      <div className="relative hidden lg:block px-14 py-26">
        <div className="absolute top-38 left-0 w-full h-px bg-brand-blue z-0" />
        <div className="absolute bottom-38 left-0 w-full h-px bg-brand-blue z-0" />

        <div className="flex items-center justify-center gap-12 xl:gap-20">
          <Image
            src="/profile/contactHero.webp"
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
            <FormField
              name="name"
              register={register}
              rules={contactValidationRules.name}
              error={errors.name}
              placeholder={t("formPlaceholder.name")}
            />
            <FormField
              name="phone"
              register={register}
              rules={contactValidationRules.phone}
              error={errors.phone}
              placeholder={t("formPlaceholder.phone")}
              type="number"
            />
            <FormField
              name="email"
              register={register}
              rules={contactValidationRules.email}
              error={errors.email}
              placeholder={t("formPlaceholder.email")}
              type="email"
            />
            <FormField
              name="message"
              register={register}
              rules={contactValidationRules.message}
              error={errors.message}
              placeholder={t("formPlaceholder.text")}
              type="textarea"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex justify-center items-center gap-1 py-2 w-[182px] bg-brand-blue text-white font-semibold rounded-xl cursor-pointer hover:bg-[#1c74bc85] active:text-black active:bg-white active:border-1 active:border-brand-blue transition-all duration-300 disabled:opacity-50"
            >
              {loading ? t("loadingTitle") : t("emailTitle")}
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>

            {(success || error) && (
              <FeedbackMessage
                text={success || error}
                type={success ? "success" : "error"}
              />
            )}
          </form>
        </div>
      </div>

      {/* Mobile form */}
      <div className="lg:hidden">
        <hr className="border-1 border-brand-blue mb-8" />
        <Image
          src="/profile/contactForm.png"
          alt="Worker fixing floor"
          width={154}
          height={154}
          className="w-[154px] h-[154px] object-cover rounded-full mx-auto"
        />
        <div className="text-center flex flex-col gap-2 py-2 px-2">
          <h2 className="font-bold text-2xl text-brand-blue">{t("title")}</h2>
          <p className="font-bold text-brand-blue">{t("formularSubText")}</p>
        </div>

        <ContactFormInfo />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col gap-5 text-xs px-4 my-12 max-w-[550px] mx-auto"
        >
          <FormField
            name="name"
            register={register}
            rules={contactValidationRules.name}
            error={errors.name}
            placeholder={t("formPlaceholder.name")}
            isMobile
          />
          <FormField
            name="phone"
            register={register}
            rules={contactValidationRules.phone}
            error={errors.phone}
            placeholder={t("formPlaceholder.phone")}
            type="number"
            isMobile
          />
          <FormField
            name="email"
            register={register}
            rules={contactValidationRules.email}
            error={errors.email}
            placeholder={t("formPlaceholder.email")}
            type="email"
            isMobile
          />
          <FormField
            name="message"
            register={register}
            rules={contactValidationRules.message}
            error={errors.message}
            placeholder={t("formPlaceholder.text")}
            type="textarea"
            isMobile
          />

          <button
            type="submit"
            disabled={loading}
            className="py-2 w-full bg-brand-blue text-white font-semibold rounded-full"
          >
            {loading ? t("loadingTitle") : t("emailTitle")}
          </button>

          {(success || error) && (
            <FeedbackMessage
              text={success || error}
              type={success ? "success" : "error"}
            />
          )}
        </form>
      </div>
    </div>
  );
};
