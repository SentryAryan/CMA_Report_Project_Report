"use client";

import { useState } from "react";
import StepOne from "@/components/create-project-forms/StepOne";
import StepTwo from "@/components/create-project-forms/StepTwo";

export interface formDataType {
  name: string;
  email: string;
  password: string;
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    password: "",
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center ">
      <p className="text-5xl">Create Project Report</p>
      <h1 className="text-xl font-bold mb-4">Step {step} of 3</h1>

      {step === 1 && (
        <StepOne formData={formData} setFormData={setFormData} next={next} />
      )}

      {step === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          next={next}
          back={back}
        />
      )}

    </div>
  );
}
