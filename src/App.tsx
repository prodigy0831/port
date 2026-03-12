import { motion } from "motion/react";
import { ArrowDown, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const IMAGES = {
  cosmetic: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_IqzbTMo03bcnMiMY5AoCZjhqBLJvDxGvi-QOAgmjnQ5t9gzWOoDi-jbVzig_zQDqq66Fw7bI0b4EtdpcJnmoUgMGHzKqpp6Ut8o5SA556m1An9GPPRvaAKc9dPPASndMlaBJ8oS1ycimqXyMNjJSY7jP9Ozgmj4SI5u2IX_DkqjE8QiF88NI6dWu57EIin7R0jzOKHyPC0wnvbHMuWzkTmUNKnvaA2GaC8BNKKUW2PA3XjdS_-Fa8z9f3jRsjVTAgEgW3vEFaWQK",
  automotive: "https://lh3.googleusercontent.com/d/1-OuiRScIGs6hKmDetcy8OKwEqPqUXGwV",
  food: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMq6yTBV1ri9IsQubMKHKyU0Kv_gSPEbkB7SvmHS-SQkKEXbxY01Yul7EHfdRuBG4BJSbeGlLqkUv9l-ArckT5qCgrUo8SQuA70zAx8_EgAelHPZZBT583WBCyRvFHPX38bX_ixZ3dvy-3YRPH6PAPTGfs1z7hcKZu9sXZpeVbcN005KgFDrZ1FwqKJG9rG_l6HI-IXE3FtUvjIvUsjaTkK60yOJMBJ_ocTo7iV3aM0zggUcNarZCWqn9USILv5jBMPovF_p_Z5BI9",
  nature: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-8HJ9jjpjTwBKR9XaejaNHcwXHtpvciSs-zdmqMg1oePgnixQrc7i3_TBWXMJmcL_7KV-zcNm8XnkdVpPztmKSB7woK4qqI1yFyOkdzInKhbFHj00x_2wN_lsAMfzvasrTFWCKwRjak3KGke0BZCpQzh6tpPFzS71qd3-sI7ieHG7jH32E4pIY2nSniEyqmGsWi25UUcsRP91s0TeUZeXN735j3vT7nLH-KsWVBjBt3I46spsuNthkVV5BlFu5tLiO_2ayc6rwr_r",
  midnight: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8TSGpkzStMXyolywOOHiumJgSjCM1k8krJwA6EuNKuQLo3jvUMViMdijtWoiaUSnGIEUFkhPZhiHQTeUzfbmTW6Dj53FpwRePW-qsTxfeJjLPuzFUhPAlq5piPP8_5Mk2z3suW8p-xmwDpB0dCDsf4qTaCOaiVr6TwF-NLn_CbBkwVl9uZAJvkamEvbyRXt4atlnPsBSZ2x_ksChxyS75SILvYyElPBrDZ6clSHRqZKP5anuIN_r1h9C9QDM7TdOgnf2XsDsXnFhq",
  manifesto: "https://lh3.googleusercontent.com/aida-public/AB6AXuArcq08vWqyxpR1tHSOqHm0UF_JtkKmKXn-OB4nTatN9wBJKdk0X275tsh3MxG8Pg2i0S--yWhzF4egIRg7fu6VP-lxOJCbNNmBUo9WbSFR2f4lwXtWts2vQQPi8jD5WmnHPxoLUXZDjJV4Zld75epPyK267K7uVn8SGswz2tmhObUYOVfK74Zom5_xrwTRLA0MspkXLdNz5qUcFYMz1AE3v-H3YFXGfOmPsi54NaYJ_ActAtc3inw9-_EtZ6MjKMzgeGzhA8wen_Ji"
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white flex items-center justify-center text-black font-black text-sm tracking-tighter">
            AV
          </div>
          <span className="font-bold tracking-tighter text-2xl hidden sm:block">에테르 비주얼</span>
        </div>
        <nav className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-bold text-white/70">
          <a href="#" className="hover:text-brand-blue transition-colors">포트폴리오</a>
          <a href="#" className="hover:text-brand-blue transition-colors">프로세스</a>
          <a href="#" className="hover:text-brand-blue transition-colors">전시</a>
        </nav>
        <button className="bg-white text-black px-8 py-3 text-[10px] uppercase font-black tracking-[0.3em] hover:bg-brand-blue hover:text-white transition-all duration-300">
          문의하기
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Ambient Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-[160px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-5xl"
        >
          <p className="text-[10px] uppercase tracking-[0.6em] text-brand-blue mb-8 font-black">Est. 2014</p>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-6">
            그림자
            <span className="block text-outline mt-2 md:mt-0">빛</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-lg leading-relaxed mb-12 font-light">
            영화적 감성을 지닌 AI 영상 스토리텔링을 위한 공간.<br />
            우리는 인간만이 발견할 수 있는 장면과 감정을 기획하고,<br />
            그 상상을 AI를 통해 새로운 이미지와 이야기로 확장합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-brand-blue text-white px-12 py-5 uppercase text-[11px] font-black tracking-[0.3em] hover:brightness-110 transition-all shadow-2xl shadow-brand-blue/20">
              갤러리 둘러보기
            </button>
            <button className="border border-white/20 bg-white/5 backdrop-blur-xl text-white px-12 py-5 uppercase text-[11px] font-black tracking-[0.3em] hover:bg-white hover:text-black transition-all">
              우리의 철학
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12"
        >
          <ArrowDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 md:px-12 py-32 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">포트폴리오</h2>
            <div className="w-24 h-1.5 bg-brand-blue" />
          </div>
          <p className="text-[10px] text-gray-500 max-w-[240px] uppercase tracking-[0.3em] leading-relaxed text-right font-bold">
            지난 10년간 가장 영향력 있었던 시각적 서사들을 엄선했습니다.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Vertical Item */}
          <div className="col-span-12 md:col-span-3 row-span-2 group cursor-pointer overflow-hidden relative aspect-[3/4] md:aspect-auto">
            <img src={IMAGES.cosmetic} alt="느와르 세션" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-[10px] text-brand-blue font-black uppercase tracking-widest mb-2">파트 I</p>
              <h3 className="text-2xl font-bold uppercase tracking-tight">느와르 세션</h3>
            </div>
          </div>

          {/* Wide Item */}
          <div className="col-span-12 md:col-span-9 group cursor-pointer overflow-hidden relative aspect-video">
            <img src={IMAGES.automotive} alt="본죽 광고" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-[10px] text-brand-blue font-black uppercase tracking-widest mb-2">상업 영상</p>
              <h3 className="text-2xl font-bold uppercase tracking-tight">본죽 광고</h3>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">SEOUL, 2026</p>
            </div>
          </div>

          {/* Square Item */}
          <div className="col-span-12 md:col-span-4 group cursor-pointer overflow-hidden relative aspect-square">
            <img src={IMAGES.food} alt="강렬한 미각" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold uppercase tracking-tight">강렬한 미각</h3>
            </div>
          </div>

          {/* Medium Item */}
          <div className="col-span-12 md:col-span-5 group cursor-pointer overflow-hidden relative aspect-[4/3]">
            <img src={IMAGES.nature} alt="잠재된 대지" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold uppercase tracking-tight">잠재된 대지</h3>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">아이슬란드, 2024</p>
            </div>
          </div>

          {/* Featured Large Item */}
          <div className="col-span-12 group cursor-pointer overflow-hidden relative aspect-[21/9] mt-8">
            <img src={IMAGES.midnight} alt="미드나잇 연대기" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex flex-col items-center justify-center text-center p-12">
              <p className="text-[10px] text-brand-blue font-black uppercase tracking-[0.5em] mb-6">리미티드 에디션</p>
              <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">미드나잇 연대기</h3>
              <p className="italic text-gray-300 max-w-lg text-sm md:text-lg font-light">"도시가 가장 크게 말하는 순간은 사람들이 잠든 밤입니다."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-40 px-6 md:px-24 bg-[#0d0f14] overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter text-white/[0.03] absolute -top-20 md:-top-32 left-0 select-none pointer-events-none">의도</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 relative z-10 leading-tight">비주얼<br />매니페스토</h3>
            <p className="text-gray-400 leading-loose mb-16 max-w-lg text-lg font-light">
              우리는 단순히 사진을 찍지 않습니다. 우리는 서사를 구축합니다. 우리의 철학은 '결정적 순간'에 뿌리를 두고 있습니다. 빛과 구도, 그리고 감정이 일치하여 말로 다 할 수 없는 이야기를 전하는 그 찰나의 순간 말입니다.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-4">미니멀리즘</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed uppercase font-bold tracking-widest">본질을 찾기 위해 불필요한 소음을 걷어냅니다.</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-4">분위기</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed uppercase font-bold tracking-widest">공간이 주는 감각을 최우선으로 합니다.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-[#c2c2c2] p-10 md:p-16 aspect-[4/5] w-full max-w-md flex items-center justify-center relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-6 border border-black/5 pointer-events-none" />
              <img src={IMAGES.manifesto} alt="매니페스토" className="w-full grayscale brightness-75 mix-blend-multiply" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-tight">
            보이지 않는 것을<br />포착할 <span className="text-brand-blue italic font-light">준비</span>가 되셨나요?
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.4em] text-[11px] mb-16 max-w-2xl mx-auto leading-loose font-bold">
            글로벌 프로젝트, 전시 문의 및 파인 아트 프린트 상담이 가능합니다.
          </p>
          <button className="bg-white text-black px-16 py-6 font-black uppercase text-[12px] tracking-[0.4em] hover:bg-brand-blue hover:text-white transition-all duration-500 shadow-2xl hover:shadow-brand-blue/40">
            대화 시작하기
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0c10] border-t border-white/5 px-6 md:px-12 py-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-brand-blue flex items-center justify-center text-white font-black text-[10px]">AV</div>
                <span className="font-bold tracking-tighter text-xl uppercase">에테르 비주얼</span>
              </div>
              <p className="text-gray-500 text-[11px] uppercase tracking-[0.3em] max-w-xs leading-loose font-bold">
                베를린을 기반으로 전 세계에서 활동하는 파인 아트 사진 스튜디오입니다. 빛과 그림자, 그리고 서사의 정점을 추구합니다.
              </p>
              <div className="flex gap-6 mt-10">
                <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-brand-blue text-[10px] font-black uppercase tracking-[0.4em] mb-10">탐색</h4>
              <ul className="text-[10px] uppercase tracking-[0.3em] text-gray-500 space-y-6 font-bold">
                <li><a href="#" className="hover:text-white transition-colors">포트폴리오</a></li>
                <li><a href="#" className="hover:text-white transition-colors">프린트 샵</a></li>
                <li><a href="#" className="hover:text-white transition-colors">전시</a></li>
                <li><a href="#" className="hover:text-white transition-colors">스튜디오 저널</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-brand-blue text-[10px] font-black uppercase tracking-[0.4em] mb-10">연결</h4>
              <ul className="text-[10px] uppercase tracking-[0.3em] text-gray-500 space-y-6 font-bold">
                <li><a href="#" className="hover:text-white transition-colors">인스타그램</a></li>
                <li><a href="#" className="hover:text-white transition-colors">비핸스</a></li>
                <li><a href="#" className="hover:text-white transition-colors">비메오</a></li>
                <li><a href="#" className="hover:text-white transition-colors">문의</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-[9px] text-gray-600 uppercase tracking-[0.4em] font-black">
            <p>© 2024 에테르 비주얼 스튜디오. All rights reserved.</p>
            <div className="flex gap-12 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">개인정보 처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
