import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GlowEffect } from './ui/GlowEffect';
import { Button } from './ui/Button';
import { Nav } from './ui/Nav';
import { ClientLogos } from './ui/ClientLogos';
import { StatsCard } from './ui/StatsCard';
import { openCalendly } from '../utils/calendly';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <GlowEffect />
      
      {/* Only show Nav on desktop */}
      <div className="hidden lg:block">
        <Nav />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-32 -right-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -bottom-32 -left-32 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 min-h-screen items-center">
          {/* Left Column - Content */}
          <div className="relative z-10 space-y-8 lg:pr-12 pt-16 text-center lg:text-left">
            {/* Open for Projects Label - Centered on mobile */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 text-sm font-medium">Open for Projects</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">Elevate Your</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Business with AI
                </span>
              </h1>
            </div>

            {/* Image - Only show between headline and subheadline on mobile */}
            <div className="block lg:hidden relative w-full max-w-sm mx-auto">
              <div className="relative">
                <div className="absolute -inset-px bg-gradient-to-tr from-blue-500/50 to-violet-500/50 rounded-2xl blur-2xl opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl backdrop-blur-sm" />
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/5 to-violet-500/5 p-1">
                  <img
                    src="https://i.postimg.cc/Xq3nR75z/U-Own-Destiny-Web-19.png"
                    alt="Aleksa Spalevic"
                    className="w-full rounded-xl"
                  />
                </div>

                {/* Stats Cards - Adjusted positioning for mobile */}
                <StatsCard 
                  position="-right-2 top-4 translate-x-4"
                  value="98%"
                  label="Client Satisfaction"
                  className="scale-75 origin-bottom-left"
                />
                <StatsCard 
                  position="-left-4 bottom-4"
                  value="24/7"
                  label="Support Available"
                  className="scale-75 origin-bottom-right"
                />
              </div>

              {/* Client Logos - Show under image on mobile */}
              <div className="mt-8 lg:hidden">
                <ClientLogos />
              </div>
            </div>
              
            {/* Subheadline */}
            <p className="mt-6 text-xl text-gray-400 leading-relaxed">
              I'm Aleksa Spalevic, founder of DestinyMedia GmbH. We transform businesses through cutting-edge AI solutions and automation.
            </p>

            {/* CTA Button - Centered on mobile */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-full lg:w-auto">
                <Button 
                  variant="primary"
                  onClick={openCalendly}
                  className="w-full lg:w-auto justify-center"
                >
                  <span className="flex items-center gap-2">
                    Free AI Audit
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
              
              {/* Enterprise Projects - Only show on desktop */}
              <div className="hidden lg:block space-y-1">
                <div className="font-semibold text-white">50+ Enterprise Projects</div>
                <div className="text-sm text-gray-400">Delivered Successfully</div>
              </div>
            </div>

            {/* Added spacer div for extra bottom margin */}
            <div className="h-32 lg:h-48"></div>
          </div>

          {/* Right Column - Image (Only show on desktop) */}
          <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/3 lg:right-0 lg:w-[45%] xl:w-[50%] hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-tr from-blue-500/50 to-violet-500/50 rounded-2xl blur-2xl opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl backdrop-blur-sm" />
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/5 to-violet-500/5 p-1">
                <img
                  src="https://i.postimg.cc/Xq3nR75z/U-Own-Destiny-Web-19.png"
                  alt="Aleksa Spalevic"
                  className="w-full rounded-xl"
                />
              </div>

              {/* Stats Cards */}
              <StatsCard 
                position="-right-4 top-4"
                value="98%"
                label="Client Satisfaction"
              />
              <StatsCard 
                position="-left-4 bottom-4"
                value="24/7"
                label="Support Available"
              />
            </div>

            {/* Client Logos - Only show on desktop */}
            <div className="hidden lg:block">
              <ClientLogos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}