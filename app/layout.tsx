import '@/app/ui/global.css'
import {inter} from "@/app/ui/fonts";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Tol Dashboard",
    default: "Tol Dashboard"
  },
  description: 'The official Tol Acme Dashboard, built with AppRouter',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
