import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { openCalendly } from '../../utils/calendly';

export function ContactInfo() {
  return (
    <div className="relative">
      {/* Contact Info Box */}
      <div className="relative h-[220px]">
        {/* Gradient background */}
        <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-xl rounded-2xl" />
        
        {/* Content container */}
        <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col justify-center">
          {/* Top Row */}
          <div className="flex justify-between mb-8">
            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 
                  flex items-center justify-center hover:from-blue-500/20 hover:to-violet-500/20 
                  transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-400">Germany</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 
                  flex items-center justify-center hover:from-blue-500/20 hover:to-violet-500/20 
                  transition-colors duration-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                <p className="text-gray-400">+49 151 41310845</p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between">
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 
                  flex items-center justify-center hover:from-blue-500/20 hover:to-violet-500/20 
                  transition-colors duration-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-400">info@aleksa.ai</p>
              </div>
            </div>

            {/* Languages */}
            <div className="flex items-start gap-3" style={{ marginRight: '11px' }}>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 
                  flex items-center justify-center hover:from-blue-500/20 hover:to-violet-500/20 
                  transition-colors duration-300">
                  <Globe className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Languages</h3>
                <p className="text-gray-400">GER, ENG & SRB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free AI Audit Button - Half overlapping */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <Button 
          variant="primary" 
          onClick={openCalendly}
          className="px-12"
        >
          Free AI Audit
        </Button>
      </div>
    </div>
  );
}