import React from 'react';
import { Quote, PlaySquare } from 'lucide-react';
import { VideoEmbed } from './VideoEmbed';

export function CeoMessage() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -right-64 top-0 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -left-64 bottom-0 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Column */}
          <div className="relative">
            {/* Video Label */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <PlaySquare className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent whitespace-nowrap">
                    See what I have to say to you
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
            <VideoEmbed videoId="ejibYgHPpDo" />
          </div>

          {/* Content Column */}
          <div className="relative">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05]">
                <Quote className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Message from the CEO</span>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Transforming Business</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Through AI Innovation
              </span>
            </h2>

            <div className="space-y-4 text-gray-400">
              <p>
                Our mission is to revolutionize business operations through cutting-edge AI solutions. We're dedicated to empowering companies with intelligent automation that drives growth and efficiency.
              </p>
              <p>
                With our expertise in AI voice agents, chatbots, and workflow automation, we're helping businesses across industries achieve their full potential. Our solutions are not just about technology – they're about creating real, measurable impact for our clients.
              </p>
              <p>
                Let's work together to transform your vision into reality.
              </p>
            </div>

            <div className="mt-8">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Aleksa Spalevic
              </div>
              <div className="text-gray-400">CEO & AI Solutions Architect</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}