import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
        <div class="pt-16 h-3/4">
            <div class="relative h-full overflow-y-hidden">
                <div class="container h-full flex items-center">
                    <div class="relative z-10 text-gray-600">
                        <h1 class="text-3xl md:text-6xl">Fußbodenheizung</h1>
                        <p class="text-xl md:text-2xl">schnell und professionell in Paderborn</p>
                        <button class="btn btn-head-img border border-gray-600 uppercase mt-4 md:bg-transparent hover:bg-white">Kostenloses Angebot anfordern</button>
                    </div>
                </div>
                <Img
                    fluid={data.banner.childImageSharp.fluid} 
                    style={{ position: 'absolute'}}
                    imgStyle={{ 'object-position': 'right bottom' }}
                    className="w-full top-0 bottom-0 left-0 z-0"
                    objectFit="cover"
                />
            </div>
        </div>
        <div class="bg-white">
            <div class="container py-6 text-center  md:py-24">
            <p class="text-gray-500 md:max-w-3/4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros.</p>
            </div>
        </div>
        <div class="bg-gray-200">
            <div class="container h-full">
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div class="-mx-4 pb-6 lg:mx-0 lg:py-24">
                        <Img
                            fluid={data.img2.childImageSharp.fluid} 
                            objectFit="cover"
                        />
                    </div>
                    <div class="py-6 lg:py-24">
                        <h3 class="text-2xl md:text-4xl uppercase font-medium text-gray-600">Neubau</h3>
                        <div class="divider"></div>
                        <div>
                            <p class="text-xl text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros</p>
                            <p class="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros.</p>
                            <button class="btn bg-white mt-4 hover:bg-gray-50">Neubau planen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <div class="container h-full">
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div class="-mx-4 pb-6 lg:mx-0 lg:py-24 lg:order-2">
                        <Img
                            fluid={data.img1.childImageSharp.fluid} 
                            objectFit="cover"
                        />
                    </div>
                    <div class="py-6 lg:py-24 lg:order-1">
                        <h3 class="text-2xl md:text-4xl uppercase font-medium text-gray-600">Modernisierung</h3>
                        <div class="divider"></div>
                        <div>
                            <p class="text-xl text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros</p>
                            <p class="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros.</p>
                            <button class="btn bg-white border mt-4 hover:bg-gray-50">weitere Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="multibg">
            <div class="container h-full py-6">
                <div class="md:flex items-center">
                    <div class="flex-1">
                        <p class="text-2xl md:text-4xl uppercase text-white">Kostenloser Preisrechner</p>
                        <p class="text-white mt-3">Sie können bei uns die Kosten für Ihren Fussbodenheizung kostenlos berechnen.</p>
                    </div>
                    <div>
                        <button class="btn mt-4 text-white border border-white hover:bg-white hover:text-gray-500 md:mt-0">Jetzt berechnen</button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        banner: file(relativePath: { eq: "images/home_bg.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
                }
            }
        },

        img1: file(relativePath: { eq: "images/modernisierung.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
            }
            }
        },

        img2: file(relativePath: { eq: "images/neubau.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
            }
            }
        }
    }
`