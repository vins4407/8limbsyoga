import axios from "axios";





export const SendEmail = async ({
    name,
    email,
    phone,
    zip,
    country,
    message,
    whatsapp,
    setSend,
  }) => {
    try {
      const datas = {name,email,whatsapp,zip,country, phone, message };
      let res = await axios.post(`https://nodemailer-contactform.onrender.com/send`, datas);
      if (res) {
        setSend(res.data);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  