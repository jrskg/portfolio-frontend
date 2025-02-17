import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import instance from '../utils/axiosInstance';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async() => {
    if ([name, email].some((value) => !value || value.trim() === "")) {
      toast("Name and Email are required", {
        type: "error",
      });
      return;
    }
    try {
      setLoading(true);
      const {data} = await instance.post<{isSent: boolean}>("/system/send-email", {
        name,
        email,
        message,
      });
      if(data.isSent){
        toast("Email sent successfully", {
          type: "success",
        });
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
      toast("Failed to send email", {
        type: "error",
      });
    }finally{setLoading(false)}
  };

  return (
    <section className="py-10 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Let's discuss your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600">sgsuraj150@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-600">+977 9811202946</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-600">Birgunj, Nepal</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <input
                value={name}
                disabled={loading}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                value={email}
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={message}
                disabled={loading}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
            </div>
            <motion.button
              disabled={loading}
              onClick={sendEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}