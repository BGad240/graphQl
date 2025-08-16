"use client";
import React from 'react';
import useCountry from '@/hooks/useCountry';
import CountryList from '@/components/CountryList';
import LoadingPage from '@/components/LoadingPage'; // استيراد صفحة التحميل
import ErrorPage from '@/components/ErrorPage';   // استيراد صفحة الخطأ

function Country() {
  const { data, error, loading } = useCountry();

  // في حالة التحميل، نعرض المكون المخصص
  if (loading) {
    return <LoadingPage/>;
  }
  
  // في حالة حدوث خطأ، نعرض صفحة الخطأ مع الرسالة
  if (error) {
    return <ErrorPage message={error.message} statusCode={500} />;
  }

  // في حالة نجاح جلب البيانات، نعرض قائمة الدول داخل حاوية منسقة
  return (
    <div className="bg-slate-900 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-3xl font-extrabold tracking-tight text-white">
            Explore <span className="text-pink-500">Countries</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-300">
            Discover information about countries from around the world.
          </p>
        </div>
        
        {/* التأكد من وجود البيانات قبل عرض القائمة */}
        {data && data.countries && (
          <CountryList countries={data.countries.slice(0, 9)} />
        )}
      </main>
    </div>
  );
}

export default Country;
