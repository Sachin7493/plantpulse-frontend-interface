import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ChatBox from "../components/ChatBox";
import About from "./About";
import Contact from "./Contact";
import ImageSlider from "../components/ImageSlider";

const backend_ml_url = import.meta.env.VITE_BACKEND_ML_URL;

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [result, setResult] = useState(null);
  const [file, setFile] = useState(null);
  const [checkStatus, setCheckStatus] = useState("🔍 Check Disease");

  const navigate = useNavigate();
  const fileInputRef = useRef();
  const isLoggedIn = localStorage.getItem("auth") === "true";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && isLoggedIn) {
      setSelectedImage(URL.createObjectURL(file));
      setFile(file);
      setUploaded(true);
      setResult(null);
      setCheckStatus("🔍 Check Disease");
      e.target.value = null;
    }
  };

  const handleClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate("/login");
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setUploaded(false);
    setFile(null);
    setResult(null);
    setCheckStatus("🔍 Check Disease");
  };

  const handleCheckDisease = async () => {
    setCheckStatus("Checking...");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await Axios.post(`${backend_ml_url}/predict`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(res.data);
      setCheckStatus("Completed ✅");
    } catch (err) {
      console.error(err);
      setCheckStatus("Error ❌");
      alert("Error detecting disease.");
    }
  };

  return (
    <div className="text-center p-6 min-h-screen pt-10 bg-white dark:bg-[#0b1120] text-green-900 dark:text-white flex flex-col items-center">
      <ImageSlider />
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-8">
        Welcome to PlantPulse to Check Disease in Plant
      </h2>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center">
        <div className="w-full md:w-1/2 relative">
          <div
            onClick={handleClick}
            className="h-80 border-2 border-dashed border-green-400 flex flex-col items-center justify-center cursor-pointer rounded-xl hover:border-green-600 transition overflow-hidden relative"
          >
            {selectedImage ? (
              <>
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-xl"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage();
                  }}
                  className="absolute top-2 right-2 bg-white dark:bg-gray-800 text-red-600 rounded-full px-2 text-sm hover:bg-red-100 dark:hover:bg-red-900"
                >
                  ✕
                </button>
              </>
            ) : (
              <div>
                <p className="text-lg font-semibold">
                  Drag & Drop or Click to Upload
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Supported formats: JPG, PNG
                </p>
              </div>
            )}
          </div>
          <p className="mt-2 font-medium text-green-600 dark:text-green-300 text-sm text-center">
            {uploaded
              ? "✅ Image uploaded successfully"
              : "Upload your plant photo and get instant results."}
          </p>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          {uploaded && (
            <button
              onClick={handleCheckDisease}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
            >
              {checkStatus}
            </button>
          )}

          {result && (
            <div className="mt-4 p-4 rounded bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
              <strong>Prediction Result:</strong>
              <p>
                <strong>Disease:</strong> {result.prediction}
              </p>
              <p>
                <strong>Accuracy:</strong> {result.confidence}%
              </p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <ChatBox
            autoPrompt={
              result?.prediction && result?.confidence
                ? `${result.prediction} with ${result.confidence}% accuracy`
                : ""
            }
          />
        </div>
      </div>
      <div className="w-full max-w-4xl mt-5 space-y-16">
        <About />
      </div>

      <div className="w-full max-w-4xl mt-30 space-y-16">
        <Contact />
      </div>
    </div>
  );
}
