import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "27ad7baf-c9ec-401f-bbe2-9697ec9e8d2c");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fuga quasi culpa eveniet modi 
                veniam commodi dolorum natus dicta similique sapiente impedit
                 voluptatibus atque perferendis ducimus labore officia, consequatur laborum adipisci?</p>
                 <ul>
                    <li><img src={mail_icon} alt="" />srivstavshivam079@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 830-381-9944</li>
                    <li><img src={location_icon} alt="" />Swarshti puram khargapur gomti nagar<br/>Lucknow uttar pradesh</li>
                 </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your massage here</label>
                <textarea name="massage" rows="6"placeholder='Enter your massage'required></textarea>
                 <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact