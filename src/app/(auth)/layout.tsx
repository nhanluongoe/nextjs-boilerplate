import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Auth module",
  description: "Description of the auth module",
};

export default function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
