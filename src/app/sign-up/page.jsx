"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AlertMessage from "../components/AlertMessages";
import { Eye, EyeOff, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const submitData = { ...formData };

    try {
      // const response = await fetch(
      //   "https://true-lens-backend.onrender.com/api/auth/register",
      //   {
      //     method: "POST",
      //     mode: "cors",
      //     credentials: "include",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(submitData),
      //   }
      // );
      // setLoading(false);
      // if (response.ok) {
      //   setSuccessMessage("Account created successfully!");
      //   setErrorMessage("");
      //   setFormData({
      //     name: "",
      //     username: "",
      //     email: "",
      //     password: "",
      //     verifyPassword: "",
      //   });
      //   setTimeout(() => {
      //     router.push("/sign-in");
      //   }, 2000);
      // } else {
      //   const responseData = await response.json();
      //   setErrorMessage(
      //     `Signing up failed: ${responseData.error || "An error occurred"}`
      //   );
      //   setSuccessMessage("");
      // }
      const response = await axios.post(
        "https://true-lens-backend.onrender.com/api/auth/register",
        submitData,
        {
          mode: "cors",
          credentials: "include",
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      setSuccessMessage("Account created successfully!");
      setErrorMessage("");

      setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
        verifyPassword: "",
      });

      setTimeout(() => {
        router.push("/sign-in");
      }, 2000);
    } catch (error) {
      setErrorMessage(`Error signing up: ${error.response.data.error}`);
      console.log(error);
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign Up for TRUELENS
          </CardTitle>
          <AlertMessage
            message={successMessage}
            type="success"
            onClose={() => setSuccessMessage("")}
          />
          <AlertMessage
            message={errorMessage}
            type="error"
            onClose={() => setErrorMessage("")}
          />
          <CardDescription className="text-center">
            Create your account to start fact-checking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="johndoe123"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="verifyPassword">Verify Password</Label>
              <div className="relative">
                <Input
                  type={showVerifyPassword ? "text" : "password"}
                  id="verifyPassword"
                  name="verifyPassword"
                  placeholder="Verify Password"
                  value={formData.verifyPassword}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  onClick={() => setShowVerifyPassword(!showVerifyPassword)}
                >
                  {showVerifyPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showVerifyPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              {loading ? "creating account..." : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
