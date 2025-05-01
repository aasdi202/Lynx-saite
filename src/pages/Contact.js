import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaTelegram, FaWhatsapp, FaMicrophone, FaHeadphones } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [audioURL, setAudioURL] = useState(null);
  const [recording, setRecording] = useState(false);
  const [trackingCode, setTrackingCode] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedEmail = btoa(form.email); // Simple base64 encryption
    const trackCode = Math.random().toString(36).substr(2, 8).toUpperCase();
    setTrackingCode(trackCode);
    console.log("Message sent:", {
      name: form.name,
      email: encodedEmail,
      message: form.message,
      trackCode,
    });
    setForm({ name: "", email: "", message: "" });
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/mp3" });
      const url = URL.createObjectURL(blob);
      setAudioURL(url);
    };

    recorder.start();
    setRecording(true);
    setMediaRecorder(recorder);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 px-6 relative">
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        تماس با ما
      </motion.h2>

      <p className="text-center text-gray-300 mb-8">
        برای ارتباط با تیم لاینکس و ارسال هرگونه سوال یا پیشنهاد، لطفاً از یکی از روش‌های زیر استفاده کنید.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <Card className="bg-white/5 backdrop-blur border border-white/10 p-6 shadow-2xl">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="نام شما"
                required
              />
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ایمیل شما"
                required
              />
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="پیام شما"
                required
              />
              <div className="flex items-center gap-4">
                <Button type="submit">ارسال پیام</Button>
                {recording ? (
                  <Button variant="destructive" onClick={stopRecording}>
                    توقف ضبط
                  </Button>
                ) : (
                  <Button variant="outline" onClick={startRecording}>
                    <FaMicrophone className="mr-2" />
                    ضبط پیام صوتی
                  </Button>
                )}
              </div>
              {audioURL && (
                <audio className="mt-4 w-full" controls src={audioURL}></audio>
              )}
            </form>
            {trackingCode && (
              <p className="text-green-400 mt-4">
                کد پیگیری شما: <span className="font-mono">{trackingCode}</span>
              </p>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 shadow">
            <h3 className="font-bold text-xl mb-2">راه‌های ارتباطی</h3>
            <p>
              <strong>ایمیل:</strong>{" "}
              <a href="mailto:lynx.project2025@gmail.com" className="underline text-blue-300">
                lynx.project2025@gmail.com
              </a>
            </p>
            <p>
              <strong>تلگرام:</strong>{" "}
              <a href="https://t.me/lynxproject2025" className="underline text-blue-300">
                @lynxproject2025
              </a>
            </p>
            <p>
              <strong>واتساپ:</strong>{" "}
              <a href="https://wa.me/989000000000" className="underline text-blue-300">
                پیام در واتساپ
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://t.me/lynxproject2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <FaTelegram className="mr-2" /> تلگرام
            </a>
            <a
              href="https://wa.me/989000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <FaWhatsapp className="mr-2" /> واتساپ
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 right-4 hidden md:block"
      >
        <FaHeadphones className="text-5xl text-purple-400 drop-shadow-lg" title="پشتیبانی آنلاین" />
      </motion.div>
    </div>
  );
};

export default Contact;
