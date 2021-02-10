import React from "react";
import { Link } from "gatsby"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <>
        <Header />
        {children}
        <footer class="bg-gray-800">
            <div class="container py-6">
                <div class="md:flex justify-between items-end">
                    <div class="text-gray-400 text-sm text-center md:text-left">
                        <p>Krylex • Obere Sage 39 • 33184 Altenbeken</p>
                        <p><a href="tel: +4917642146550">+49 176 421 46 550</a> • <a href="mailto: info@krylex.de">info@krylex.de</a></p>
                    </div>
                    <div class="mt-6 text-gray-400 text-sm text-center md:text-left md:mt-0">
                        <Link to="/impressum">Impressum</Link> • <Link to="/Datenschutz">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}