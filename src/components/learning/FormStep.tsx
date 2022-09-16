import React, { useState } from 'react'

import { motion } from 'framer-motion';

type Props = {}

const FormStep = (props: Props) => {

  const [step, setStep] = useState(1)
  return (
    <div>
      <h3>Form Stepper</h3>

      <div className='mt-10 mx-6'>
        <div className='p-6 rounded-2xl bg-neutral-700 text-neutral-200 drop-shadow-lg'>
          <div className="stepper">
            <div className="flex justify-between rounded p-6">
              <Step step={1} currentStep={step} />
              <Step step={2} currentStep={step} />
              <Step step={3} currentStep={step} />
              <Step step={4} currentStep={step} />
            </div>
          </div>
          <div className="skeleton">
            <div className="mt-2 h-6 w-40 rounded bg-neutral-600"></div>
            <div className="mt-4 space-y-2">
              <div className="h-4 w-5/6 rounded bg-neutral-600/50 animate-pulse delay-500"></div>
              <div className="h-4  rounded bg-neutral-600/50 animate-pulse delay-300"></div>
              <div className="h-4 w-4/6 rounded bg-neutral-600/50 animate-pulse delay-150"></div>
            </div>
          </div>
          <div className="footer flex justify-between mt-10 items-center">
            <button className='link w-fit rounded-full text-neutral-300 px-6' onClick={() => setStep(step < 2 ? step : step - 1)}>Back</button>
            <button className='bg-emerald-600 border-emerald-600' onClick={() => setStep(step > 4 ? step : step + 1)}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

type StepProps = {
  step: number,
  currentStep: number
}
function Step({ step, currentStep }: StepProps) {
  let status =
    currentStep === step
      ? 'active' : currentStep < step ? 'inactive' : 'completed'

  return (
    <div
      className={[`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`, status === 'active' ? 'border-emerald-300 bg-transparent text-emerald-300' : status === 'completed' ? 'border-emerald-400 bg-emerald-400 text-white' : 'border-neutral-400 text-white bg-transparent'].join(' ')}
    >
      <div className='flex items-center justify-center'>
        {status === 'completed' ?
          <span>✔</span> :
          <span>{step}</span>
        }
      </div>
    </div>
  )
}

export default FormStep