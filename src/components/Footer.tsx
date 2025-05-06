import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#333333] text-[12px] text-white px-4 py-7">
      <div className="space-y-10 border-b pb-[1.5rem] border-[#515151]">
          <div>
            <h6 className="text-[15px] font-bold">Contact Us</h6>
            <div className="mt-2">
              <p>Have questions about the method?</p>
              <p>Email: support@quitsmart.com</p>
            </div>
          </div>
          <div>
            <h6 className="text-[15px] font-bold">Important Notice</h6>
            <div className="mt-2">
              <p>
                This method is based on personal experience and psychological
                principles. Results may vary. Consult your healthcare provider
                before starting any smoking cessation program.
              </p>
            </div>
          </div>
      </div>

      <p className="text-center mt-[1.5rem]">
      © {new Date().getFullYear()} QuitSmart. All rights reserved.
      </p>
    </footer>
  );
};
