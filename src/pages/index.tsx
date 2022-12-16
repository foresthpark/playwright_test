import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const { handleSubmit, register } = useForm();

  const handleUserSubmit = async () => {
    const response = await axios.post("/api/hello", {
      name: "Forest Park",
      age: 18,
    });

    if (!response.data.success) {
      setMessage(response.data.message);
      setErrMessage(response.data.errMessage);
      return;
    }

    setMessage(response.data.message);
    return;
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="bg-white p-3 text-black"
        >
          Current: {counter}
        </button>
        <button onClick={handleUserSubmit} className="bg-white p-3 text-black">
          Send request
        </button>
        {message && <p id="message_test">{message}</p>}
        {errMessage && <p id="err_message_test">{errMessage}</p>}
        <form>
          <input {...register("name", { required: true })}></input>
          <input {...register("age", { required: true })}></input>
        </form>
      </main>
    </>
  );
};

export default Home;
