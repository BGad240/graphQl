"use client"
import Link from "next/link";

export default function CountryDetails({ country }) {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-md bg-slate-800 rounded-xl shadow-xl border border-slate-700">
                {/* رأس البطاقة */}
                <div className="text-center p-6 border-b border-slate-700">
                    <h1 className="text-6xl mb-2">{country.emoji}</h1>
                    <h2 className="text-2xl font-bold text-slate-100">
                        {country.name}
                    </h2>
                    <p className="text-sm text-slate-400 font-mono">
                        ({country.code})
                    </p>
                </div>

                {/* قسم التفاصيل */}
                <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-400">Capital</span>
                        <span className="font-semibold text-slate-50">{country.capital}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-400">Currency</span>
                        <span className="font-semibold text-slate-50">{country.currency}</span>
                    </div>

                    <div>
                        <h3 className="font-medium text-slate-400 mb-2">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {country.languages.map(lang => (
                                // تغيير لون البطاقات الصغيرة لتتناسب مع لون الموقع الرئيسي
                                <span
                                    key={lang.code}
                                    className="px-3 py-1 text-sm font-medium text-pink-200 bg-pink-500/10 rounded-full"
                                >
                                    {lang.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* زر العودة */}
                <div className="p-4 border-t border-slate-700">
                    <Link href="/countries" className="block text-center font-semibold text-pink-500 hover:underline">
                        &larr; Back to Countries
                    </Link>
                </div>
            </div>
        </div>
    );
}
