"use client"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, MessageCircle, Users, Calculator, Car, Leaf, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Layout */}
            <div className="flex md:hidden items-center justify-between w-full">
              <div className="flex-1 flex justify-center">
                <Image
                  src="/logo-posto13-gnv.png"
                  alt="Posto 13 GNV Logo"
                  width={280}
                  height={140}
                  className="h-20 w-auto"
                  priority
                />
              </div>
              <a
                href="https://wa.me/5521959167359?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20receber%20mais%20informações!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo-posto13-gnv.png"
                  alt="Posto 13 GNV Logo"
                  width={200}
                  height={100}
                  className="h-12 md:h-16 w-auto"
                  priority
                />
              </div>

              <div className="flex items-center">
                <a
                  href="https://wa.me/5521959167359?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20receber%20mais%20informações!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-xs sm:text-sm inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                  <span className="hidden md:inline">Fale por</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section id="inicio" className="relative w-full">
        {/* Mobile Hero - With Background Image */}
        <div className="block lg:hidden relative" style={{ aspectRatio: "375/386" }}>
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/new-mobile-hero-bg.svg"
              alt="Pare de perder dinheiro com gasolina cara e IPVA absurdo - Posto 13 GNV"
              fill
              className="object-cover object-center"
              quality={100}
              priority
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col justify-end items-center h-full px-4 pb-8">
            {/* Large CTA Button positioned below the text in the image */}
            <div className="w-full max-w-sm mx-auto mb-4">
              <a
                href="https://wa.me/5521959167359?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20receber%20mais%20informações!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 text-base leading-tight shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border-2 border-green-500 w-full rounded-xl inline-flex items-center justify-center"
              >
                SOLICITAR ORÇAMENTO DE GNV
              </a>
            </div>

            {/* Promotional Text - Mobile - No Background - Below button */}
            <div className="text-center">
              <div className="text-white font-bold text-sm drop-shadow-lg">
                KIT GNV A PARTIR DE <span className="text-yellow-400 text-base font-black">12X R$139,90</span> 🔥
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero - Original Light Theme */}
        <div className="hidden lg:block bg-gradient-to-br from-gray-50 to-white py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">
              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-6">
                  <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight">
                    <span className="text-yellow-600">
                      Pare de perder
                      <br />
                      dinheiro com
                    </span>
                    <br />
                    gasolina cara e IPVA absurdo
                  </h1>

                  <div className="space-y-4">
                    <p className="text-lg xl:text-2xl text-gray-700 font-medium leading-relaxed">
                      <span className="text-yellow-600 font-bold">Economize de verdade todo mês.</span> Instale GNV,
                      reduza gastos com combustível, pague menos IPVA e veja seu investimento se pagar em poucos meses.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/5521959167359?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20receber%20mais%20informações!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 text-xl inline-flex items-center justify-center rounded-md"
                  >
                    Solicitar Orçamento da Instalação de GNV
                  </a>
                </div>

                {/* Key Benefits - Desktop Only */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 bg-white rounded-lg shadow-md border border-gray-100">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-5 h-5 text-black" />
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="font-bold text-gray-900 text-sm">Economia no IPVA</p>
                      <p className="text-xs text-gray-600">até 62,5%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 bg-white rounded-lg shadow-md border border-gray-100">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Car className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="font-bold text-gray-900 text-sm">Autonomia</p>
                      <p className="text-xs text-gray-600">60% maior</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 bg-white rounded-lg shadow-md border border-gray-100">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="font-bold text-gray-900 text-sm">Sustentável</p>
                      <p className="text-xs text-gray-600">Pague menos para rodar mais</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual - Desktop Only */}
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-50 to-gray-50 rounded-full shadow-2xl"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[380px] h-[250px] xl:w-[450px] xl:h-[300px]">
                      <Image
                        src="/customer-service.jpg"
                        alt="Cliente satisfeito com instalação de GNV - Posto 13 GNV"
                        fill
                        className="object-cover rounded-2xl shadow-xl"
                        quality={100}
                        sizes="450px"
                      />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-12 right-12 bg-white rounded-full p-3 shadow-lg animate-bounce">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">💰</span>
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-12 bg-white rounded-full p-3 shadow-lg animate-pulse">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Car className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Google Rating - Desktop Only */}
                <div className="mt-6 flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg font-bold text-gray-900">4.8</span>
                    <div className="flex items-center space-x-0.5">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">(89)</span>
                  </div>
                  <span className="text-gray-600 font-medium text-base">Avaliações no Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section id="sobre-nos" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
              <span className="mx-4 sm:mx-6 text-yellow-600 font-bold text-sm sm:text-base uppercase tracking-wider"></span>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Há mais de 10 anos no mercado de GNV
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="w-full space-y-4 sm:space-y-6">
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/business-owners.jpg"
                  alt="Proprietários e sócios do Posto 13 GNV - equipe especializada em sistemas GNV"
                  fill
                  className="object-cover object-center"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/carro-capo-aberto.jpg"
                    alt="Instalação de sistema GNV - motor com capô aberto mostrando componentes do kit GNV"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/carro-pessoa2.jpg"
                    alt="Equipe técnica do Posto 13 GNV com cliente satisfeito após instalação do sistema GNV"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                  <p>
                    A Posto 13 GNV é referência no segmento de gás natural veicular,
                    <span className="text-yellow-600 font-semibold">
                      {" "}
                      com reconhecimento e homologação pelo INMETRO
                    </span>
                    .
                  </p>
                  <p>
                    Atuamos com excelência na instalação e manutenção de kits de 3ª, 5ª e 6ª geração, além de
                    realizarmos reteste de cilindros, sempre seguindo os mais altos padrões de qualidade e segurança.
                  </p>
                  <p>
                    Com mais de <span className="text-yellow-600 font-semibold">5.000 conversões realizadas</span>,
                    contamos com uma equipe de profissionais altamente qualificados, duas lojas modernas e equipadas, e
                    trabalhamos apenas com as melhores marcas do mercado.
                  </p>
                  <p>
                    Nosso compromisso é proporcionar{" "}
                    <span className="text-yellow-600 font-semibold">economia real</span> para nossos clientes, com
                    equipamentos de primeira linha, garantia total e condições de pagamento facilitadas.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center space-x-4 p-6 bg-yellow-50 rounded-lg border border-yellow-200 hover:border-yellow-500 hover:bg-yellow-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">+60.000</p>
                    <p className="text-sm text-gray-600">Instalações</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-yellow-50 rounded-lg border border-yellow-200 hover:border-yellow-500 hover:bg-yellow-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">4.8 ★ no Google</p>
                    <p className="text-sm text-gray-600">Avaliações dos clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Offer Banner */}
      <section className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
              COBRIMOS OFERTAS DA CONCORRÊNCIA *
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-black mt-1">*Kits Semelhantes</p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-12 sm:py-16 md:py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
              <span className="mx-4 sm:mx-6 text-yellow-600 font-bold text-sm sm:text-base uppercase tracking-wider"></span>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Instalações Completas de GNV
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Oferecemos instalações profissionais com tecnologia de ponta e qualidade garantida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="group">
              <Card className="overflow-hidden border-2 border-gray-100 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 bg-white">
                <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden">
                  <Image
                    src="/gnv-3-geracao.jpeg"
                    alt="Instalação de GNV 3ª geração - motor com capô aberto mostrando sistema GNV de terceira geração"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-600 mb-3 sm:mb-4">
                    Instalação de GNV 3ª Geração
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Instalação profissional dos kits GNV com tecnologia de 3ª geração, oferecendo economia e
                    confiabilidade comprovadas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="overflow-hidden border-2 border-gray-100 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 bg-white">
                <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden">
                  <Image
                    src="/gnv-5-geracao.jpeg"
                    alt="Instalação de GNV 5ª geração - motor com capô aberto mostrando sistema GNV de quinta geração"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-600 mb-3 sm:mb-4">
                    Instalação de GNV 5ª Geração
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Instalação profissional dos kits GNV com tecnologia de 5ª geração, proporcionando maior eficiência e
                    performance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="overflow-hidden border-2 border-gray-100 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 bg-white">
                <div className="relative h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden">
                  <Image
                    src="/gnv-6-geracao.jpeg"
                    alt="Instalação de GNV 6ª geração - motor com capô aberto mostrando sistema GNV de sexta geração"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-600 mb-3 sm:mb-4">
                    Instalação de GNV 6ª Geração
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Instalação profissional dos kits GNV com tecnologia de 6ª geração, a mais avançada do mercado com
                    máxima eficiência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Overlapping WhatsApp Button */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="https://wa.me/5521959167359?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20receber%20mais%20informações!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-12 lg:py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl inline-flex items-center space-x-1 sm:space-x-2 md:space-x-3 border-4 border-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          >
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">Solicitar Orçamento Gratuito</span>
          </a>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-12 sm:py-16 md:py-24 bg-white pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
              <span className="mx-4 sm:mx-6 text-yellow-600 font-bold text-sm sm:text-base uppercase tracking-wider"></span>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Benefícios de converter seu carro aqui
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Escolha a melhor opção do mercado com condições especiais e qualidade garantida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 border-2 border-gray-100 hover:border-green-500 bg-white hover:bg-green-50">
              <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <Calculator className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  ECONOMIA DE ATÉ 62,5% NO IPVA
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Reduza drasticamente os custos do IPVA com a conversão para GNV e economize milhares de reais por ano.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 border-2 border-gray-100 hover:border-red-500 bg-white hover:bg-red-50">
              <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-red-600 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <Car className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  GNV É LIBERDADE: ATÉ 60% A MAIS DE AUTONOMIA
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Aumente significativamente a autonomia do seu veículo e rode muito mais com o mesmo investimento em
                  combustível.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 border-2 border-gray-100 hover:border-yellow-500 bg-white hover:bg-yellow-50">
              <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-yellow-500 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 group-hover:text-black" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  COMBUSTÍVEL QUE MENOS AGRIDE O AMBIENTE
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Contribua para um meio ambiente mais limpo com o combustível mais sustentável e ecológico disponível.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
              <span className="mx-4 sm:mx-6 text-yellow-600 font-bold text-sm sm:text-base uppercase tracking-wider"></span>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Avaliações reais de clientes satisfeitos com nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/testimonial-lucas-new.png"
                  alt="Avaliação 5 estrelas do Lucas Manoel no Google Reviews sobre instalação de GNV no Posto 13"
                  fill
                  className="object-contain bg-white transition-all duration-300 group-hover:brightness-105"
                  quality={100}
                />
              </div>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/testimonial-bruno-new.png"
                  alt="Avaliação 5 estrelas do Bruno Silva no Google Reviews sobre serviço de GNV no Posto 13"
                  fill
                  className="object-contain bg-white transition-all duration-300 group-hover:brightness-105"
                  quality={100}
                />
              </div>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl md:col-span-2 lg:col-span-1">
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/testimonial-nelson-new.png"
                  alt="Avaliação 5 estrelas do Nelson Lima no Google Reviews sobre serviço de qualidade do Posto 13 GNV"
                  fill
                  className="object-contain bg-white transition-all duration-300 group-hover:brightness-105"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
              <span className="mx-4 sm:mx-6 text-yellow-600 font-bold text-sm sm:text-base uppercase tracking-wider"></span>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-16 sm:w-24"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Fale Conosco
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Estamos prontos para atender você e esclarecer todas as suas dúvidas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-6 sm:space-y-8">
                <a
                  href="https://wa.me/5521959167359?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20receber%20mais%20informações!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 shadow-lg w-full text-left"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">WhatsApp</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 break-all">+55 21 95916-7359</p>
                  </div>
                </a>

                <button
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/Estrada+dos+Bandeirantes,+4462,+Curicica,+Rio+de+Janeiro,+RJ",
                      "_blank",
                    )
                  }
                  className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 shadow-lg w-full text-left cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">Endereço</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      Estrada dos Bandeirantes, 4462
                      <br />
                      Curicica, Rio de Janeiro - RJ
                      <br />
                      CEP: 22775-114
                    </p>
                  </div>
                </button>

                <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 shadow-lg">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">Horário</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      Segunda a Sexta: 8h às 17h
                      <br />
                      Sábado: 8h às 12h
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=Estrada+dos+Bandeirantes,+4462,+Curicica,+Rio+de+Janeiro,+RJ&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Posto 13 GNV - Estrada dos Bandeirantes, 4462, Curicica, RJ"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/5521959167359?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20receber%20mais%20informações!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-600 hover:bg-green-700 text-white p-3 sm:p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-pulse"
      >
        <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />
      </Link>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo-posto13-gnv.png"
                  alt="Posto 13 GNV Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Especialistas em GNV no Rio de Janeiro. Mais de 60.000 instalações com qualidade garantida.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-yellow-400" />
                  <p>+55 21 95916-7359</p>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <p>
                    Estrada dos Bandeirantes, 4462
                    <br />
                    Curicica, RJ
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <p>Seg-Sex: 8h-17h | Sáb: 8h-12h</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Fale Conosco</h4>
              <a
                href="https://wa.me/5521959167359?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20receber%20mais%20informações!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold w-full inline-flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm text-center">© 2025 Posto 13 GNV. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
