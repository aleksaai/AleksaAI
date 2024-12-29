import React from 'react';
import { FooterNav } from './FooterNav';
import { FooterSocial } from './FooterSocial';
import { FooterLogo } from './FooterLogo';

export function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Glass Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      
      <div className="relative border-t border-white/[0.05] backdrop-blur-2xl bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <FooterLogo />
              <p className="text-gray-400 text-sm">
                Transforming businesses through innovative AI solutions and automation.
              </p>
            </div>
            
            <FooterNav />
            <FooterSocial />
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Germany</p>
                <p>info@aleksa.ai</p>
                <p>+49 151 41310845</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} DestinyMedia GmbH. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a 
                href="https://destinymedia.de/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://destinymedia.de/impressum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Imprint
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}