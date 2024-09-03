import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
    Typography,
    Alert,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";

const Modal = ({open , handleOpen}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const [responseMessage, setResponseMessage] = useState(null);

    const validateInputs = () => {
        let valid = true;
        const errors = { name: '', phoneNumber: '' };
    
        if (!name.trim()) {
          errors.name = 'Имя обязательно.';
          valid = false;
        }
    
        const phoneRegex = /^\+?\d{9,15}$/;
        if (!phoneNumber.trim()) {
          errors.phoneNumber = 'Номер телефона обязателен.';
          valid = false;
        } else if (!phoneRegex.test(phoneNumber)) {
          errors.phoneNumber = 'Неверный формат номера телефона.';
          valid = false;
        }
    
        setErrors(errors);
        return valid;
    };

    const sendTelegramMessage = async () => {
        if (!validateInputs()) return;

        setIsLoading(true);
        const chatId = import.meta.env.VITE_CHAT_ID ;
        const botToken = import.meta.env.VITE_TOKEN;
        const url = `${import.meta.env.VITE_BASE_URL}${botToken}/sendMessage`;
        
        try {
          const response = await axios.post(url, {
            chat_id: chatId,
            text: `Исми: ${name}\nРаками: ${phoneNumber}`,
          });
          setResponseMessage({ type: 'success', text: 'Сообщение успешно отправлено!' });

        } catch (error) {   
          setResponseMessage({ type: 'error', text: 'Ошибка при отправке сообщения.' }); 
          console.log(error);
          
        } finally{
            setName('');
            setPhoneNumber('');
            setIsLoading(false);

            setTimeout(() => {
              handleOpen();
              setResponseMessage(null)
            }, 2000)
        }
      };

    return (
     <>
        <Dialog className="bg-[#00544F] " open={open} size="md" handler={handleOpen}>
          <div className="flex items-center justify-end mt-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <DialogBody>
            <Typography className="font-siteFont mb-4 text-lg sm:text-2xl 3xl:text-4xl text-center flex-wrap font-bold bg-gradient-to-tr from-[#E9C775] via-[#D9AF66] to-[#BB824A] bg-clip-text text-transparent" variant="h4">
                Оставьте свои данные,<br/> чтобы мы с вами связались.
            </Typography>
            {responseMessage !== null && responseMessage.type && 
            <Alert
              icon={responseMessage.type === 'success' ? <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg> : <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              }
              className={`rounded-none border-l-4 ${responseMessage.type === 'success' ? "border-[#2ec946] text-[#2ec946] bg-[#2ec946]/10" : "border-[#c92e2e] text-[#c92e2e] bg-[#4e3838]"}   font-medium  mb-2`}
            >
              {responseMessage.text}
            </Alert>
            }
            <div className="flex flex-col mb-2 3xl:mb-6 justify-center items-center">
                <label className="font-siteFont text-sm sm:text-base 3xl:text-2xl tracking-wider text-white mb-2 text-center">Имя:</label>
                <input className="px-8 py-4 rounded-3xl focus:outline-none text-black text-sm sm:text-base 3xl:text-2xl w-[90%] 3xl:w-[80%]" 
                type="text" 
                placeholder="Дима"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}/>
                {errors.name && 
                    <Typography
                    variant="small"
                    color="red"
                    className="ml-4 mt-2 flex items-center gap-1 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-px h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.name}
                  </Typography>
                }    
            </div>
            <div className="flex flex-col justify-center items-center">
                <label className="font-siteFont text-sm sm:text-base  3xl:text-2xl tracking-wider text-white mb-2 text-center">Номер телефона:</label>
                <input className="px-8 py-4 rounded-3xl focus:outline-none text-black text-sm sm:text-base 3xl:text-2xl w-[90%] 3xl:w-[80%]" 
                type="text" 
                placeholder="+998 91 234 56 78"
                value={phoneNumber}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}/>
                {errors.phoneNumber && 
                    <Typography
                    variant="small"
                    color="red"
                    className="ml-4 mt-2 flex items-center gap-1 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-px h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.phoneNumber}
                  </Typography>
                }
            </div>
            
            
          </DialogBody>
          <DialogFooter className="space-x-2 items-center flex flex-col-reverse sm:flex-row">
            <Button 
            className="3xl:text-xl"
            variant="text" color="white" onClick={handleOpen}>
              Отмена
            </Button>
        
            
            <button 
            disabled={isLoading}
            className={`flex items-center justify-center 3xl:text-xl  text-white rounded-full px-6 sm:px-12 py-4 sm:py-5 font-siteFont font-medium`}
                style={{
                  background: 'linear-gradient(90deg, #E9C775 0%, #BB824A 50%, #E9C775 100%)',
                  transition: 'all .3s',
                }}

                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundSize = '200% 100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundSize = '100% 40%';
                }}
                onClick={sendTelegramMessage}
                >
                
                {isLoading ? <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                  </div> : 'Отправить'}
                  {/* : (responseMessage !== null && responseMessage.type ? (
                    `${responseMessage.text}`
                      )  */}
            </button>
          </DialogFooter>
        </Dialog>
      </>
    );
}

export default Modal