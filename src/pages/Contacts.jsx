import { TypeAnimation } from "react-type-animation";

const Contacts = () => {
  const inputStyle =
    "px-6 py-3 bg-gray-100 dark:bg-slate-200 rounded-full shadow-md outline-blue-500";
  const labelStyle = "pb-4";
  return (
    <div
      id="contacts"
      className="text-gray-600 bg-white dark:bg-slate-900 dark:text-gray-300"
    >
      <div className="w-[90%] lg:w-[65%] mx-auto py-28">
        <div className="">
          <div className="flex flex-col ">
            <div className="">
              <div className="flex flex-col items-center mb-16">
                <TypeAnimation
                  className="text-3xl font-semibold text-blue-500 md:text-5xl"
                  sequence={["Contact me", 1000, " ", 1000]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
            </div>

            <div className="flex flex-col text-xl font-semibold md:text-2xl">
              <form
                action="https://getform.io/f/32ad80e6-3f6d-410f-8727-76a999806fcf"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2 ">
                  <div className="flex flex-col">
                    <label className={labelStyle}>Name</label>
                    <input className={inputStyle} type="text" name="name" />
                  </div>
                  <div className="flex flex-col">
                    <label className={labelStyle}>Phone</label>
                    <input className={inputStyle} type="text" name="phone" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className={labelStyle}>Email</label>
                  <input className={inputStyle} type="email" name="email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className={labelStyle}>Subject</label>
                  <input className={inputStyle} type="text" name="subject" />
                </div>
                <div className="flex flex-col py-2 ">
                  <label className={labelStyle}>Message</label>
                  <textarea
                    className="px-6 py-3 mb-6 bg-gray-100 rounded-lg shadow-md dark:bg-slate-200 outline-blue-500"
                    name="message"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full px-6 py-3 mb-6 text-2xl font-semibold bg-blue-500 rounded-full shadow-md text-gray-50 sm:w-fit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
