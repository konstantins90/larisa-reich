import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
        <div className="pt-16 h-3/4">
            <div className="relative h-full overflow-y-hidden">
                <div className="container h-full flex items-center">
                    <div className="relative z-10 text-gray-600">
                        <h1 className="text-3xl md:text-6xl">Fußbodenheizung</h1>
                        <p className="text-xl md:text-2xl">schnell und professionell in Paderborn</p>
                        <button className="btn btn-head-img border border-gray-600 uppercase mt-4 md:bg-transparent hover:bg-white">Kostenloses Angebot anfordern</button>
                    </div>
                </div>
                <StaticImage
                    src="../images/home_bg.jpg"
                    layout={'constrained'}
                    quality={80}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Tisch reservieren"
                    className="absolute w-full top-0 bottom-0 left-0 z-0"
                />
            </div>
        </div>
        <div className="bg-white">
            <div className="container py-6 text-center  md:py-24">
            <p className="text-gray-500 md:max-w-3/4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros.</p>
            </div>
        </div>
        <div className="bg-gray-200">
            <div className="container h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div className="-mx-4 pb-6 lg:mx-0 lg:py-24">
                        <StaticImage
                            src="../images/modernisierung.jpg"
                            layout={'constrained'}
                            quality={80}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Tisch reservieren"
                            className="block h-full"
                        />
                    </div>
                    <div className="py-6 lg:py-24">
                        <h3 className="text-2xl md:text-4xl uppercase font-medium text-gray-600">Neubau</h3>
                        <div className="divider"></div>
                        <div>
                            <p className="text-xl text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros</p>
                            <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros.</p>
                            <button className="btn bg-white mt-4 hover:bg-gray-50">Neubau planen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white">
            <div className="container h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div className="-mx-4 pb-6 lg:mx-0 lg:py-24 lg:order-2">
                        <StaticImage
                            src="../images/neubau.jpg"
                            layout={'constrained'}
                            quality={80}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Tisch reservieren"
                            className="block h-full"
                        />
                    </div>
                    <div className="py-6 lg:py-24 lg:order-1">
                        <h3 className="text-2xl md:text-4xl uppercase font-medium text-gray-600">Modernisierung</h3>
                        <div className="divider"></div>
                        <div>
                            <p className="text-xl text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros</p>
                            <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros.</p>
                            <button className="btn bg-white border mt-4 hover:bg-gray-50">weitere Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="multibg">
            <div className="container h-full py-6">
                <div className="md:flex items-center">
                    <div className="flex-1">
                        <p className="text-2xl md:text-4xl uppercase text-white">Kostenloser Preisrechner</p>
                        <p className="text-white mt-3">Sie können bei uns die Kosten für Ihren Fussbodenheizung kostenlos berechnen.</p>
                    </div>
                    <div>
                        <button className="btn mt-4 text-white border border-white hover:bg-white hover:text-gray-500 md:mt-0">Jetzt berechnen</button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}