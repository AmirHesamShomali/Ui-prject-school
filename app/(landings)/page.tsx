'use client';
import React, { useEffect, useState } from 'react';

// دیتای پایه برای کارت‌ها
const gradesData = [
  { id: 1, title: "کلاس اول", time: "۴ شهریور", stats: ["2,739 نمونه سوال", "1,191 فایل آموزشی"], items: ["نمونه سوالات ریاضی", "آموزش الفبا"] },
  { id: 2, title: "کلاس دوم", time: "۵ شهریور", stats: ["2,811 نمونه سوال", "1,880 فایل آموزشی"], items: ["تمرین علوم", "ریاضی فصل ۱"] },
  { id: 3, title: "کلاس سوم", time: "16 ساعت قبل", stats: ["3,884 نمونه سوال", "2,424 فایل آموزشی"], items: ["آسمان آبی", "کاربرد کسر"] },
  { id: 4, title: "کلاس چهارم", time: "6 شهریور", stats: ["6,308 نمونه سوال", "3,239 فایل آموزشی"], items: ["ریاضی چهارم", "فارسی مهر"] },
  { id: 5, title: "کلاس پنجم", time: "5 شهریور", stats: ["6,168 نمونه سوال", "2,887 فایل آموزشی"], items: ["ریاضی پنجم", "علوم تجربی"] },
  { id: 6, title: "کلاس ششم", time: "1 ساعت قبل", stats: ["10,174 نمونه سوال", "5,340 فایل آموزشی"], items: ["ریاضی ششم", "فارسی ششم"] },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1e293b] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* ۱. سمت راست: لینک‌ها (دسکتاپ) + دکمه همبرگری (موبایل) */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors">خانه</a>
            <a href="#" className="hover:text-white transition-colors">درباره ما</a>
          </div>
          
          {/* دکمه همبرگری موبایل */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* ۲. وسط: جستجو (flex-1 باعث می‌شود کل فضای خالی وسط را بگیرد) */}
        <div className="hidden md:flex flex-1 justify-center px-8">
          <input 
            type="text" 
            placeholder="جستجو در محتوا..." 
            className="w-full max-w-lg bg-[#334155] text-sm text-white placeholder-gray-400 rounded-full py-2 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
          />
        </div>

        {/* ۳. سمت چپ: لوگو */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">گاما<span className="text-blue-400">Pro</span></span>
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg shadow-inner">G</div>
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-gray-700 p-4 space-y-3 animate-in slide-in-from-top duration-300">
          <input type="text" placeholder="جستجو..." className="w-full bg-[#334155] text-sm text-white placeholder-gray-400 rounded-full py-2 px-4" />
          <a href="#" className="block py-2 text-gray-300 hover:text-white border-b border-gray-700/50">خانه</a>
          <a href="#" className="block py-2 text-gray-300 hover:text-white">درباره ما</a>
        </div>
      )}
    </nav>
  );
};

const CategoryBar = () => {
  const categories = ["نمونه سوال", "فایل‌های آموزشی", "درسنامه", "آزمون آنلاین", "تیزهوشان", "مدرسه یاب"];
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((cat, idx) => (
          <a key={idx} href="#" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">{cat}</a>
        ))}
      </div>
    </div>
  );
};

const HeroBanner = () => (
  <div className="relative w-full bg-gradient-to-r from-[#1e293b] to-[#334155] py-16 px-4 overflow-hidden shadow-2xl shadow-blue-900/20">
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div className="max-w-4xl mx-auto text-center text-white relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">به بزرگترین بانک آموزشی <span className="text-blue-400">کشور</span> خوش آمدید</h1>
    </div>
  </div>
);

const AdBanner = () => (
  <div className="max-w-7xl mx-auto px-4 my-12">
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/20">
      <img src="/img-banner-2.jpg" alt="بنر تبلیغاتی" className="w-full h-auto object-cover" />
    </div>
  </div>
);

const GradeCard = ({ data }: { data: any }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-3">
      <h3 className="text-lg font-bold text-[#1e293b] group-hover:text-blue-600 transition-colors">{data.title}</h3>
      <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded-full">🕒 {data.time}</span>
    </div>
    <div className="grid grid-cols-1 gap-2 mb-5">
      {data.stats.map((stat: string, idx: number) => (
        <div key={idx} className="text-xs text-blue-800 bg-blue-50/50 p-2 rounded-lg text-center font-medium">{stat}</div>
      ))}
    </div>
    <ul className="space-y-3">
      {data.items.map((item: string, idx: number) => (
        <li key={idx} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer flex items-center transition-colors">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full ml-2"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// --- کامپوننت آمار (نسخه مینیمال و خطی) ---
const Counter = ({ end, duration }: { end: number, duration: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 10);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <>{count.toLocaleString()}</>;
};

const StatsSection = () => {
  const stats = [
    { title: "مدرسه فعال", count: 200000, icon: "🏫" },
    { title: "دانش‌آموز فعال", count: 1500000, icon: "👤" },
    { title: "نمونه سوال", count: 850000, icon: "📝" },
    { title: "فایل آموزشی", count: 45000, icon: "🎥" },
  ];
  return (
    <div className="bg-white border-y border-gray-100 py-4 my-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 md:gap-16">
        {stats.map((item, idx) => (
          <a key={idx} href="#" className="flex flex-col items-center px-4 py-2 text-center hover:bg-gray-50 rounded-xl transition-colors duration-200">
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-lg font-bold text-gray-800"><Counter end={item.count} duration={2000} /></span>
            <span className="text-xs text-gray-500 font-medium mt-0.5">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

// --- کامپوننت فوتر جدید ---
const Footer = () => (
  <footer className="bg-[#1e293b] text-gray-300 py-12 mt-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      
      {/* سمت راست: لینک‌ها و اطلاعات */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-lg mb-4">گاما پرو</h3>
        <div className="flex flex-col gap-3 text-sm">
          <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <span>📞</span> ۰۲۱-۱۲۳۴۵۶۷۸
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <span>✉️</span> info@gamapro.ir
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <span>📍</span> تهران، خیابان انقلاب
          </a>
        </div>
      </div>

      {/* سمت چپ: نمادهای اعتماد */}
      <div className="flex justify-center md:justify-end gap-4">
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center border border-gray-300">
           <span className="text-xs text-gray-500 text-center">Enamad<br/>Logo</span>
        </div>
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center border border-gray-300">
           <span className="text-xs text-gray-500 text-center">Samandehi<br/>Logo</span>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-xs">
      <p>© تمامی حقوق برای گاما پرو محفوظ است.</p>
    </div>
  </footer>
);



export default function Page() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      <Navbar />
      <CategoryBar />
      <HeroBanner />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#1e293b] mb-8">انتخاب پایه تحصیلی</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gradesData.map((grade) => <GradeCard key={grade.id} data={grade} />)}
        </div>
      </main>
      <AdBanner />
      <StatsSection/>
      <Footer /> {/* اینجا اضافه کنید */}
    </div>
  );
}