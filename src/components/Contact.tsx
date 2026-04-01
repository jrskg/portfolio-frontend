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
    <section className="py-32 bg-[#080808]" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase italic tracking-tighter">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
            Let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center space-x-8 group">
              <div className="p-5 rounded-3xl bg-white/5 border border-white/5 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Email</h4>
                <p className="text-xl font-bold text-white">sgsuraj150@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-8 group">
              <div className="p-5 rounded-3xl bg-white/5 border border-white/5 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Phone</h4>
                <p className="text-xl font-bold text-white">+977 9811202946</p>
              </div>
            </div>
            <div className="flex items-center space-x-8 group">
              <div className="p-5 rounded-3xl bg-white/5 border border-white/5 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Location</h4>
                <p className="text-xl font-bold text-white">Birgunj, Nepal</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <input
              value={name}
              disabled={loading}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-white/[0.02] border border-white/10 px-8 py-5 rounded-3xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all font-medium"
            />
            <input
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full bg-white/[0.02] border border-white/10 px-8 py-5 rounded-3xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all font-medium"
            />
            <textarea
              value={message}
              disabled={loading}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Your Message"
              className="w-full bg-white/[0.02] border border-white/10 px-8 py-5 rounded-3xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all font-medium resize-none"
            />
            <motion.button
              disabled={loading}
              onClick={sendEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black py-6 rounded-3xl font-black uppercase tracking-widest text-sm flex items-center justify-center space-x-4 shadow-xl"
            >
              <span>{loading ? "Transmitting..." : "Send Message"}</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}